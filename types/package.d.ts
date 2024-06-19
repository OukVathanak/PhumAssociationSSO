import { Feature } from "./feature";
import { Subscription } from "./subscription";

export interface Package {
  id: number;
  name: string;
  desc: string;
  price: number;
  isActive: boolean;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  features?: Feature[];
  subscriptions?: Subscription[];
}
