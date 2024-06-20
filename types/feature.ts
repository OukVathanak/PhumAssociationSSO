import { Association } from "./association";
import { Package } from "./package";

export interface Feature {
  id: number;
  name: string;
  desc?: string;
  isActive: boolean;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  associations?: Association[];
  packages?: Package[];
}

export class FeatureDTO {
  id?: number;
  name: string;
  desc?: string;
  isActive?: boolean;
  deletedAt?: Date;
  publishedAt?: Date;
  associations?: Association[] | number[];
  packages?: Package[] | number[];

  constructor(data: FeatureDTO) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.isActive = data.isActive;
    this.deletedAt = data.deletedAt;
    this.publishedAt = new Date();
    this.associations = data.associations;
    this.packages = data.packages;
  }
}
