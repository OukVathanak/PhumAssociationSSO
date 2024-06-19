import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserApp, UserAppDTO } from "./userApp";
import { UserProfileDTO } from "./userProfile";

export interface AuthMethod {
  id: number;
  identifier: string;
  type: string;
  strategy: string;
  password?: string;
  passToken?: string;
  idToken?: string;
  verifyToken?: string;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class AuthMethodDTO {
  id: number;
  identifier: string;
  type: AuthType;
  strategy: AuthStrategy;
  password?: string;
  passToken?: string;
  idToken?: string;
  verifyToken?: string;
  deletedAt?: Date;
  publishedAt?: Date;
}

export enum AuthType {
  PASSWORD = "Native",
  TOKEN = "External",
  BIOMETRIC = "Biometric",
}

export enum AuthStrategy {
  NATIVE = "Native",
  GOOGLE = "Google",
  APPLE = "Apple",
  FACEBOOK = "Facebook",
}

interface NativeRegister {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  password: string;
}

export class NativeRegisterDTO {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  constructor(data: any) {
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.phone = data.phone;
    this.email = data.email;
    this.password = data.password;
  }

  getUserAppDTO(): UserAppDTO {
    const userAppDTO: UserAppDTO = {
      phone: this.phone,
      email: this.email,
      publishedAt: new Date(),
    };
    return userAppDTO;
  }
}
