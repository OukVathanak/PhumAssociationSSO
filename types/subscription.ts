import { Association } from "./association";
import { Package } from "./package";

export interface Subscription {
  id: number;
  startedAt: Date;
  expiredAt: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  association?: Association;
  package?: Package;
}

export class SubscriptionDTO {
  id?: number;
  startedAt: Date;
  expiredAt: Date;
  publishedAt?: Date;
  association?: Association | number;
  package?: Package | number;

  constructor(data: SubscriptionDTO) {
    this.id = data.id;
    this.startedAt = data.startedAt;
    this.expiredAt = data.expiredAt;
    this.publishedAt = new Date();
    this.association = data.association;
    this.package = data.package;
  }
}
