const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  const jwtToken = req.headers.authorization;

  if (!jwtToken) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    if (decodedValue.role === "admin") {
      req.admin = decodedValue;
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

module.exports = adminMiddleware;
