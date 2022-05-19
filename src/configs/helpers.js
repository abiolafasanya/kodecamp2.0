import joi from "joi"
import User from "../api/models/User.js"

export function erroHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
      error: err.message,
      status: 500,
      message: "Internal Server Error",
    });
    next()
  }

  export const createValidate = joi.object({
    firstname: joi.string().min(3).max(50).required(),
    lastname: joi.string().min(3).max(50).required(),
    email: joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }).max(255).required(),
    password: joi.string().pattern(/^[\w@#&+-.]/).min(8).required(),
  });

  export const updateValidate= joi.object({
    firstname: joi.string().required(),
    lastname: joi.string().required(),
  });

  export const deactivated = async (id) => {
    let user = await User.findOne(id)
    console.log("deactivated status: ",user.isDeleted)
     let result = user.isDeleted ? true: false
     return result;
  }

  export const updatePwdValidate = (params) => {
    
  };

  export const  pwdUpdateValidate = joi.object({
    password: joi.string().pattern(/^[\w@#&+-.]/).min(8).required(),
    confirm_password: joi.ref("password"),
  });
  
  