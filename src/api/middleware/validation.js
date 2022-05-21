import User from "../models/User.js";

class Check {
  static deactivated = async (req, res, next) => {
    let user = await User.findOne({ email: req.params.email });
    let ifDeleted = user.isDeleted ? true : false;
    req.deleted = ifDeleted;
    if (!ifDeleted)
      return res.status(400).json({ message: "User has been deactivated" });
    next();
  };
}

export default Check;
