import crypto, { createSecretKey } from "crypto";

export const notFoundErrorHandler = async (req, res, next) =>
  res.status(404).render("404", { path: req.path, method: req.method });

export const serverUrl = (req) => {
  return req.protocol + "://" + req.get("host");
};

export const secretGenerator = () => crypto.randomBytes(48).toString("hex");


export const generateAccessToken = (user) => {
  return {
    accessToken: generateToken(user.id, process.env.JWT_SECRET),
    refreshToken: generateRefreshToken(
      user.id,
      process.env.REFRESH_TOKEN_SECRET
    ),
  };
};

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
