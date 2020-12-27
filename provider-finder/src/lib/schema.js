import * as yup from "yup";

export const devicesSchema = yup
  .number()
  .min(1)
  .max(100)
  .typeError("this has to be a number");

export const budgetSchema = yup
  .number()
  .min(5)
  .max(250)
  .typeError("this has to be a number");
