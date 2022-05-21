import crypto, { createSecretKey } from "crypto";
import { config } from "dotenv";
import jwt from "jsonwebtoken";

config();

export const erroHandler = (err, req, res, next) => {
  console.error(err, stack);
  res
    .status(500)
    .json({ error: err.message, message: "Internal Server Error" });
  next();
};

export const serverUrl = (req) => {
  return req.protocol + "://" + req.get("host");
};

export const secretGenerator = () => crypto.randomBytes(48).toString("hex");

export const generateAuthToken = (user) => {
  return {
    accessToken: generateToken(user.id, process.env.JWT_SECRET, "15m"),
    refreshToken: generateToken(
      user.id,
      process.env.REFRESH_TOKEN_SECRET,
      "1d"
    ),
  };
};

function generateToken(userId, secret, expiresIn) {
  return jwt.sign({ userId }, secret, { expiresIn: expiresIn });
}
// generateAccessTokenToDotEnvFile

export const checkIsUserLoggedIn = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

export const checkIsUserLoggedOut = (req, res, next) => {
  if (req.session.userId) {
    res.redirect("/");
  } else {
    next();
  }
};

export const generateSecretIntoDotEnv = () => {
  const secret = secretGenerator();
  process.env.SECRET = secret;
  console.log("Secret generated: ", secret);
};
