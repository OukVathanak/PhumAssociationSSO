/**
 * user-notification service
 */

import { factories } from "@strapi/strapi";
import {
  UserNotification,
  UserNotificationDTO,
  UserNotificationStatus,
} from "../../../../types/userNotification";
import { Notification } from "../../../../types/notification";
import { UserProfile } from "../../../../types/userProfile";

export default factories.createCoreService(
  "api::user-notification.user-notification"
);

export class UserNotificationDVO {
  id?: number;
  status: UserNotificationStatus;
  recievedAt: Date;
  notification?: Notification;
  userProfile?: UserProfile;

  constructor(data: UserNotification) {
    this.id = data.id;
    this.status = data.status;
    this.recievedAt = data.recievedAt;
    this.notification = data.notification;
    this.userProfile = data.userProfile;
  }
}
