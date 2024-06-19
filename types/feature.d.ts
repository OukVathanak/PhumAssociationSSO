import { Association } from "./association";
import { Package } from "./package";

export interface Feature {
  id: number;
  name: string;
  desc: string;
  isActive: boolean;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  associations?: Association[];
  packages?: Package[];
}
