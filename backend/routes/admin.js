const { Router } = require("express");
const adminMiddleware = require("../middlewares/admin");
const { Admin, Appointments } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");
const z = require("zod");

const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  city: z.string().min(1, "City is required"),
});

const signinSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password, city } = signupSchema.parse(req.body);

    const user = await Admin.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    await Admin.create({
      username,
      password,
      beds: 0,
      city,
      opdTime: "",
    });

    res.json({ message: "Admin created successfully" });
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

    const user = await Admin.findOne({ username, password });
    if (!user) {
      return res.status(400).json({ message: "Incorrect username or password" });
    }

    const payload = {
      id: user._id,
      username: user.username,
      role: "admin",
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });

    res.json({ token });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ msg: "Internal server error", error });
  }
});


module.exports = router;
