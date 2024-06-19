import Joi from "joi";

export const phoneNumberRegex = /^855[1-9]\d{7,8}$/;

export const nativeRegisterSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  phone: Joi.string().pattern(phoneNumberRegex).required(),
  email: Joi.string().email(),
  password: Joi.string().min(8).required(),
});
