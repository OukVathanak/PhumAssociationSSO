import { plainToInstance } from "class-transformer";

// Helper function to transform and validate DTO
export function transformAndValidate(dtoClass: any, plainObject: any) {
  const instance = plainToInstance(dtoClass, plainObject);
  return instance;
}
