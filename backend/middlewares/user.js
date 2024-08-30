const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function userMiddleware(req, res, next) {
  const token = req.headers.authorization;
  const jwtToken = token.split(" ")[1];

  if (!jwtToken) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.role === "user") {
      req.user = decodedValue;
      next();
    } else {
      res.status(403).json({ message: "Access denied" });
    }
  } catch (e) {
    res.status(403).json({
      message: "Failed to authenticate token",
    });
  }
}

module.exports = userMiddleware;
