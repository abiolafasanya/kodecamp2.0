import joi from "joi";
import JoiPasswordComplexity  from "joi-password-complexity";

const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 2,
  };

export const createValidate = joi.object({
  firstname: joi.string().min(3).max(50).required(),
  lastname: joi.string().min(3).max(50).required(),
  email: joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .max(255)
    .required(),
  password: JoiPasswordComplexity(complexityOptions).required(),
  confirm_password: joi.ref("password"),
});

export const updateValidate = joi.object({
  firstname: joi.string().required(),
  lastname: joi.string().required(),
});

export const deactivated = async (id) => {
  let user = await User.findOne(id);
  console.log("deactivated status: ", user.isDeleted);
  let result = user.isDeleted ? true : false;
  return result;
};

export const updatePwdValidate = (params) => {};

export const pwdUpdateValidate = joi.object({
  password: joi
    .string()
    .pattern(/^[\w@#&+-.]/)
    .min(8)
    .required(),
  confirm_password: joi.ref("password"),
});

export const loginValidation = joi.object({
  email: joi.string().email({ minDomainSegments: 2 }).required(),
  password: joi.string().required(),
});
