/**
 * package service
 */

import { factories } from "@strapi/strapi";
import { Feature } from "../../../../types/feature";
import { Subscription } from "../../../../types/subscription";
import { Package } from "../../../../types/package";

export default factories.createCoreService("api::package.package");

export class PackageDVO {
  id: number;
  name: string;
  desc?: string;
  price: number;
  isActive: boolean;
  features?: Feature[];
  subscriptions?: Subscription[];

  constructor(data: Package) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.price = data.price;
    this.isActive = data.isActive;
    this.features = data.features;
    this.subscriptions = data.subscriptions;
  }
}
