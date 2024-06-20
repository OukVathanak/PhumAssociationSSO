/**
 * feature service
 */

import { factories } from "@strapi/strapi";
import { Association } from "../../../../types/association";
import { Package } from "../../../../types/package";
import { Feature } from "../../../../types/feature";

export default factories.createCoreService("api::feature.feature");

export class FeatureDVO {
  id: number;
  name: string;
  desc?: string;
  isActive: boolean;
  associations?: Association[];
  packages?: Package[];

  constructor(data: Feature) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.isActive = data.isActive;
    this.associations = data.associations;
    this.packages = data.packages;
  }
}
