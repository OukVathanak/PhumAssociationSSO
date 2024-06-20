import { UserApp } from "./userApp";

export interface OTP {
  id: number;
  code: string;
  isUsed: boolean;
  token: string;
  expiredAt: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  userApp?: UserApp;
}

export class OTPDTO {
  id?: number;
  code: string;
  isUsed?: boolean;
  token: string;
  expiredAt: Date;
  publishedAt?: Date;
  userApp?: UserApp | number;

  constructor(data: OTPDTO) {
    this.id = data.id;
    this.code = data.code;
    this.isUsed = data.isUsed;
    this.token = data.token;
    this.expiredAt = data.expiredAt;
    this.publishedAt = new Date();
    this.userApp = data.userApp;
  }
}

export interface OTPAuthToken {
  id: number;
  phone: string;
}
