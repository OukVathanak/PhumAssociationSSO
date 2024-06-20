/**
 * subscription service
 */

import { factories } from "@strapi/strapi";
import { Association } from "../../../../types/association";
import { Package } from "../../../../types/package";
import { Subscription, SubscriptionDTO } from "../../../../types/subscription";

export default factories.createCoreService("api::subscription.subscription");

export class SubscriptionDVO {
  id?: number;
  startedAt: Date;
  expiredAt: Date;
  association?: Association;
  package?: Package;

  constructor(data: Subscription) {
    this.id = data.id;
    this.startedAt = data.startedAt;
    this.expiredAt = data.expiredAt;
    this.association = data.association;
    this.package = data.package;
  }
}
