import { AuthMethod } from "./authMethod";
import { OTP } from "./otp";
import { Session } from "./session";
import { UserProfile } from "./userProfile";

export interface UserApp {
  id: number;
  phone: string;
  email?: string;
  isActive?: boolean;
  lastLoginAt?: Date;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  authMethods?: AuthMethod[];
  userProfile?: UserProfile;
  sessions?: Session[];
  otps?: OTP[];
}

export class UserAppDTO {
  id?: number;
  phone: string;
  email?: string;
  isActive?: boolean;
  lastLoginAt?: Date;
  publishedAt?: Date;
  authMethods?: AuthMethod[] | number[];
  userProfile?: UserProfile | number;
  sessions?: Session[] | number[];
  otps?: OTP[] | number[];

  constructor(data: UserAppDTO) {
    this.id = data.id;
    this.phone = data.phone;
    this.email = data.email;
    this.isActive = data.isActive;
    this.lastLoginAt = data.lastLoginAt;
    this.publishedAt = new Date();
    this.authMethods = data.authMethods;
    this.userProfile = data.userProfile;
    this.sessions = data.sessions;
    this.otps = data.otps;
  }
}
