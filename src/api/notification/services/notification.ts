/**
 * notification service
 */

import { factories } from "@strapi/strapi";
import { Notification, NotificationType } from "../../../../types/notification";
import { Association } from "../../../../types/association";
import { UserNotification } from "../../../../types/userNotification";

export default factories.createCoreService("api::notification.notification");

export class NotificationDVO {
  id: number;
  title: string;
  desc?: string;
  type: NotificationType;
  publishedAt?: Date;
  association?: Association;
  userNotifications?: UserNotification[];
  constructor(data: Notification) {
    this.id = data.id;
    this.title = data.title;
    this.desc = data.desc;
    this.type = data.type;
    this.publishedAt = new Date();
    this.association = data.association;
    this.userNotifications = data.userNotifications;
  }
}
