const bcrypt = require("bcrypt");
const { Router } = require("express");
const userMiddleware = require("../middlewares/user");
const { User, Appointments, Cities, Admin } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
const z = require("zod");

const router = Router();

const userSignupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const userSigninSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = userSignupSchema.parse(req.body);

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await User.create({
      username,
      password: hashedPassword,
    });

    res.json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    res.status(500).json({ msg: "Internal server error", error });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = userSigninSchema.parse(req.body);

    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password" });
    }

    const payload = {
      id: user._id,
      username: user.username,
      role: "user",
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

router.get("/cities", async (req, res) => {
  try {
    const { city } = req.query;

    if (city) {
      const cityResult = await Cities.findOne({ name: city });
      if (!cityResult) {
        return res.status(404).json({ message: "City not found" });
      }
      return res.json({ city: cityResult });
    }
    const cities = await Cities.find();
    res.json({ cities });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post("/hospitals/details", async (req, res) => {
  try {
    const hospitalIds = req.body.ids;
    const hospitals = await Admin.find({ _id: { $in: hospitalIds } });
    res.json({ hospitals });
  } catch (error) {
    res.status(500).json({ message: "Error fetching hospital details", error });
  }
});

router.post("/hospital/appointment", userMiddleware, async (req, res) => {
  try {
    const appointmentSchema = z.object({
      name: z.string().min(1, "Name is required"),
      purpose: z.string().min(1, "Purpose is required"),
      time: z.string().min(1, "Time is required"),
      phone: z.string().min(10, "Phone number must be at least 10 digits"),
      hospitalId: z.string().length(24, "Invalid hospital ID"),
    });

    const { name, purpose, time, phone, hospitalId } = appointmentSchema.parse(
      req.body
    );

    const hospital = await Admin.findById(hospitalId);
    if (!hospital) {
      return res.status(404).json({ message: "Hospital not found" });
    }

    const appointment = await Appointments.create({
      name,
      purpose,
      time,
      phone,
      hospital: hospitalId,
      user: req.user.id,
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: { appointments: appointment._id },
    });

    res
      .status(201)
      .json({ message: "Appointment booked successfully", appointment });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ errors: error.errors });
    }
    console.error("Error booking appointment:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
