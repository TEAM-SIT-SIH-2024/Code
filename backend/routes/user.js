const { Router } = require("express");
const router = Router();
const { userMiddleware } = require("../middlewares/user");
const { User, Appointments, Cities } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const z = require("zod");

const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const signinSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = signupSchema.parse(req.body);

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    await User.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User created successfully",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ msg: "Internal server error", error });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = signinSchema.parse(req.body);

    const user = await User.findOne({ username, password });
    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password" });
    }

    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ msg: "Internal server error", error });
  }
});

router.get("/cities", async (req, res) => {
  try {
    const { city } = req.query;
    let cityResult;

    if (city) {
      cityResult = await Cities.findOne({ name: city });
    }

    res.json({
      city: cityResult || "City not found",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

module.exports = router;
