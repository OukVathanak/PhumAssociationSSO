import { UserApp } from "./userApp";

export interface Session {
  id: number;
  strategy: SessionStrategy;
  type: SessionType;
  isActive: boolean;
  expiredAt: Date;
  token: string;
  deviceName?: string;
  deviceID?: string;
  fcm?: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  userApp?: UserApp;
}

export class SessionDTO {
  id?: number;
  strategy: SessionStrategy;
  type: SessionType;
  isActive?: boolean;
  expiredAt: Date;
  token: string;
  deviceName?: string;
  deviceID?: string;
  fcm?: string;
  publishedAt?: Date;
  userApp?: UserApp | number;

  constructor(data: SessionDTO) {
    this.id = data.id;
    this.strategy = data.strategy;
    this.type = data.type;
    this.isActive = data.isActive;
    this.expiredAt = data.expiredAt;
    this.token = data.token;
    this.deviceName = data.deviceName;
    this.deviceID = data.deviceID;
    this.fcm = data.fcm;
    this.publishedAt = new Date();
    this.userApp = data.userApp;
  }
}

export enum SessionStrategy {
  NATIVE = "Native",
  GOOGLE = "Google",
  APPLE = "Apple",
  FACEBOOK = "Facebook",
}

export enum SessionType {
  USER_SESSION = "User Session",
  ANONYMOUS = "Anonymouss",
}
