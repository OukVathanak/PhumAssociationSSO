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
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  userApp?: UserApp;
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
