import { Association } from "./association";
import { UserNotification } from "./userNotification";

export interface Notification {
  id: number;
  title: string;
  desc?: string;
  type: NotificationType;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  association?: Association;
  userNotifications?: UserNotification[];
}

export class NotificationDTO {
  id: number;
  title: string;
  desc?: string;
  type: NotificationType;
  publishedAt?: Date;
  association?: Association | number;
  userNotifications?: UserNotification[] | number[];

  constructor(data: NotificationDTO) {
    this.id = data.id;
    this.title = data.title;
    this.desc = data.desc;
    this.type = data.type;
    this.publishedAt = new Date();
    this.association = data.association;
    this.userNotifications = data.userNotifications;
  }
}

export enum NotificationType {
  GENERAL = "General",
  EVENT = "Event",
  PAYMENT = "Payment",
}
