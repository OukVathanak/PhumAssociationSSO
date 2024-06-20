import { plainToInstance } from "class-transformer";
import bcrypt from "bcrypt";

// Helper function to transform and validate DTO
export function transformAndValidate(dtoClass: any, plainObject: any) {
  const instance = plainToInstance(dtoClass, plainObject);
  return instance;
}

// ---------- Hash Password ----------
export const hashPassword = async (password: string): Promise<string> => {
  try {
    return await bcrypt.hash(password, 10);
  } catch (error) {
    throw new Error("Unable to hash password");
  }
};

// ---------- Validate hash password ----------
export const validatePassword = async (
  inputPassword: string,
  hashPassword: string
): Promise<boolean> => {
  try {
    return await bcrypt.compare(inputPassword, hashPassword);
  } catch (error) {
    throw new Error("Unable to validate hash password");
  }
};
