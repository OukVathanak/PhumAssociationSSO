import { Membership } from "./membership";
import { UserApp } from "./userApp";
import { UserNotification } from "./userNotification";

export interface UserProfile {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  userApp?: UserApp;
  userNotifications?: UserNotification[];
  memberships?: Membership[];
}

export interface UserProfileDTO {
  id?: number;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  deletedAt?: Date;
  publishedAt?: Date;
  userApp?: UserApp | number;
  userNotifications?: UserNotification[] | number[];
  memberships?: Membership[] | number[];
}
