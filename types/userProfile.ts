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

export class UserProfileDTO {
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

  constructor(data: UserProfileDTO) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.phone = data.phone;
    this.email = data.email;
    this.deletedAt = data.deletedAt;
    this.publishedAt = new Date();
    this.userApp = data.userApp;
    this.userNotifications = data.userNotifications;
    this.memberships = data.memberships;
  }
}
