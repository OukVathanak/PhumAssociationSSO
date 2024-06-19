import { Media } from "../src/utils/interface";
import { Feature } from "./feature";
import { Membership } from "./membership";
import { Notification } from "./notification";
import { Subscription } from "./subscription";

export interface Association {
  id: number;
  name: string;
  desc: string;
  contact: string;
  isActive: boolean;
  isPrivate: boolean;
  url: string;
  code: string;
  logo?: Media;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  features?: Feature[];
  subscriptions?: Subscription[];
  notifications?: Notification[];
  memberships?: Membership[];
}

export interface AssociationDTO {
  id: number;
  name: string;
  desc: string;
  contact: string;
  isActive: boolean;
  isPrivate: boolean;
  url: string;
  code: string;
  logo?: Media;
  deletedAt?: Date;
  publishedAt?: Date;
}
