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

export enum UserNotificationStatus {
  READ = "Read",
  UNREAD = "Unread",
}
