const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Appointments } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.find({
    username,
    password,
  });
  if (user) {
    res.json({
      msg: "User already exists",
    });
  } else {
    await User.create({
      username: username,
      password: password,
    });

    res.json({
      message: "User created successfully",
    });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.find({
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
