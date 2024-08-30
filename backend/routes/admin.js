const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Router } = require("express");
const z = require("zod");
const { Admin, Appointments, Cities } = require("../db");
const { JWT_SECRET } = require("../config");
const adminMiddleware = require("../middlewares/admin");
const {
  admitPatientToHospital,
  getPatientsByHospital,
  dischargePatientFromHospital,
} = require("../controllers/admissionController");

const router = Router();

const signupSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  city: z.string().min(1, "City is required"),
  beds: z.string().regex(/^\d+$/, "Beds must be a valid number"),
  opdTime: z.string().min(1, "OPD Time is required"),
});

const signinSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  city: z.string().min(1, "City is required"),
});

router.post("/signup", async (req, res) => {
  try {
    const { username, password, city, beds, opdTime } = signupSchema.parse(
      req.body
    );

    const existingAdmin = await Admin.findOne({
      username: username + " , " + city,
    });
    if (existingAdmin) {
      return res.status(400).json({ msg: "Admin already exists" });
    }

    const bedsNumber = parseInt(beds);
    if (isNaN(bedsNumber)) {
      return res.status(400).json({ msg: "Invalid value for beds" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newAdmin = await Admin.create({
      username: username + " , " + city,
      password: hashedPassword,
      beds: bedsNumber,
      city,
      opdTime,
    });

    let cityEntry = await Cities.findOne({ name: city });

    if (!cityEntry) {
      cityEntry = await Cities.create({
        name: city,
        hospitals: [newAdmin._id],
      });
    } else {
      cityEntry.hospitals.push(newAdmin._id);
      await cityEntry.save();
    }

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
    const { username, password, city } = signinSchema.parse(req.body);

    const user = await Admin.findOne({ username: username + " , " + city });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res
        .status(400)
        .json({ message: "Incorrect username or password" });
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

router.delete("/appointments/:id", adminMiddleware, async (req, res) => {
  try {
    const appointmentId = req.params.id;

    const appointment = await Appointments.findById(appointmentId);
    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    await Admin.findByIdAndUpdate(appointment.hospital, {
      $pull: { appointments: appointmentId },
    });

    await Appointments.findByIdAndDelete(appointmentId);

    res.json({ message: "Appointment deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

router.post(
  "/hospital/:hospitalId/admit",
  adminMiddleware,
  admitPatientToHospital
);
router.get(
  "/hospital/:hospitalId/patients",
  adminMiddleware,
  getPatientsByHospital
);
router.delete(
  "/hospital/:hospitalId/patient/:patientId/discharge",
  adminMiddleware,
  dischargePatientFromHospital
);

module.exports = router;
