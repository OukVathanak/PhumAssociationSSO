import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserApp, UserAppDTO } from "./userApp";
import { UserProfileDTO } from "./userProfile";
import { hashPassword } from "../src/utils/functions";

export interface AuthMethod {
  id: number;
  identifier: string;
  type: string;
  strategy: string;
  password?: string;
  passToken?: string;
  identifierToken?: string;
  verifyToken?: string;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  userApp?: UserApp;
}

export class AuthMethodDTO {
  id?: number;
  identifier: string;
  type: AuthType;
  strategy: AuthStrategy;
  password?: string;
  passToken?: string;
  identifierToken?: string;
  verifyToken?: string;
  deletedAt?: Date;
  publishedAt?: Date;
  userApp?: UserApp | number;

  constructor(data: AuthMethodDTO) {
    this.id = data.id;
    this.identifier = data.identifier;
    this.type = data.type;
    this.strategy = data.strategy;
    this.password = data.password;
    this.passToken = data.passToken;
    this.identifierToken = data.identifierToken;
    this.verifyToken = data.verifyToken;
    this.deletedAt = data.deletedAt;
    this.publishedAt = new Date();
    this.userApp = data.userApp;
  }

  static async nativeInstance(data: AuthMethodDTO): Promise<AuthMethodDTO> {
    if (data.password) {
      data.password = await hashPassword(data.password);
    }

    return new AuthMethodDTO(data);
  }
}

export enum AuthType {
  NATIVE = "Native",
  EXTERNAL = "External",
  BIOMETRIC = "Biometric",
}

export enum AuthStrategy {
  NATIVE = "Native",
  GOOGLE = "Google",
  APPLE = "Apple",
  FACEBOOK = "Facebook",
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
      isActive: false,
    };

    return new UserAppDTO(userAppDTO);
  }

  getUserProfileDTO(): UserProfileDTO {
    const userProfileDTO: UserProfileDTO = {
      firstName: this.firstName,
      lastName: this.lastName,
      phone: this.phone,
      email: this.email,
    };

    return new UserProfileDTO(userProfileDTO);
  }

  async getAuthMethodDTO(): Promise<AuthMethodDTO> {
    const authMethodDTO: AuthMethodDTO = {
      identifier: this.phone,
      password: this.password,
      strategy: AuthStrategy.NATIVE,
      type: AuthType.EXTERNAL,
    };

    return await AuthMethodDTO.nativeInstance(authMethodDTO);
  }
}
