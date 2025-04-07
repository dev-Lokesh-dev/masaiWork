const jwt = require("jsonwebtoken");
require("dotenv").config();

function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Token missing");

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).send("Invalid token");
    req.user = decoded;
    next();
  });
}

function authorizeRole(role) {
  return (req, res, next) => {
    if (req.user.role !== role) return res.status(403).send("Access denied");
    next();
  };
}

module.exports = { authenticate, authorizeRole };
