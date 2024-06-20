import { Notification } from "./notification";
import { UserProfile } from "./userProfile";

export interface UserNotification {
  id: number;
  status: UserNotificationStatus;
  recievedAt: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  notification?: Notification;
  userProfile?: UserProfile;
}

export class UserNotificationDTO {
  id?: number;
  status: UserNotificationStatus;
  recievedAt: Date;
  publishedAt?: Date;
  notification?: Notification | number;
  userProfile?: UserProfile | number;

  constructor(data: UserNotificationDTO) {
    this.id = data.id;
    this.status = data.status;
    this.recievedAt = data.recievedAt;
    this.publishedAt = new Date();
    this.notification = data.notification;
    this.userProfile = data.userProfile;
  }
}

export enum UserNotificationStatus {
  READ = "Read",
  UNREAD = "Unread",
}
