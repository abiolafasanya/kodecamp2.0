import User from "../models/User.js"

export const isActive = async (id) => {
    let user = await User.findOne(id);
    console.log("deactivated status: ", user.isDeleted);
    let result = user.isDeleted ? true : false;
    return result;
  };
  