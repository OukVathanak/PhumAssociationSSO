import { Association } from "./association";

export interface Notification {
  id: number;
  title: string;
  desc?: string;
  type: NotificationType;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  association?: Association;
}

export enum NotificationType {
  GENERAL = "General",
  EVENT = "Event",
  PAYMENT = "Payment",
}
