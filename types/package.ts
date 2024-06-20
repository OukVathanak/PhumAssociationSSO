import { Feature } from "./feature";
import { Subscription } from "./subscription";

export interface Package {
  id: number;
  name: string;
  desc?: string;
  price: number;
  isActive: boolean;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  features?: Feature[];
  subscriptions?: Subscription[];
}

export class PackageDTO {
  id?: number;
  name: string;
  desc?: string;
  price: number;
  isActive: boolean;
  deletedAt?: Date;
  publishedAt?: Date;
  features?: Feature[] | number[];
  subscriptions?: Subscription[] | number[];

  constructor(data: PackageDTO) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.price = data.price;
    this.isActive = data.isActive;
    this.deletedAt = data.deletedAt;
    this.publishedAt = new Date();
    this.features = data.features;
    this.subscriptions = data.subscriptions;
  }
}
