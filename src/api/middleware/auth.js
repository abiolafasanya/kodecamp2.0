import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();
const { SECRET } = process.env;

const jwtAuth = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // If token doesn't Exit
  if (!authHeader) {
    res.status(401).json({
      status: 401,
      message: "no token, authorization denied",
    });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    await jwt.verify(token, SECRET, (err, user) => {
      if (err) {
        res.status(403).json({
          status: 403,
          message: "Token is not valid",
        });
        return;
      }

      req.user = user;

      next();
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: err.message });
  }
};

export default jwtAuth;
