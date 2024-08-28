const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Appointments } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const city = req.body.city;
  const user = await Admin.find({
    username,
    password,
  });
  if (user) {
    res.json({
      msg: "Admin already exists",
    });
  } else {
    await Admin.create({
      username: username,
      password: password,
      beds: 0,
      city: city,
      opdTime: "",
    });

    res.json({
      message: "Admin created successfully",
    });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await Admin.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );

    res.json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect email and pass",
    });
  }
});

module.exports = router;
