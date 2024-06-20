import { Media } from "../src/utils/interface";
import { Feature } from "./feature";
import { Membership } from "./membership";
import { Notification } from "./notification";
import { Subscription } from "./subscription";

export interface Association {
  id: number;
  name: string;
  desc?: string;
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

export class AssociationDTO {
  id?: number;
  name: string;
  desc?: string;
  contact: string;
  isActive: boolean;
  isPrivate: boolean;
  url: string;
  code: string;
  logo?: Media;
  deletedAt?: Date;
  publishedAt?: Date;
  features?: Feature[] | number[];
  subscriptions?: Subscription[] | number[];
  notifications?: Notification[] | number[];
  memberships?: Membership[] | number[];

  constructor(data: AssociationDTO) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.contact = data.contact;
    this.isActive = data.isActive;
    this.isPrivate = data.isPrivate;
    this.url = data.url;
    this.code = data.code;
    this.logo = data.logo;
    this.deletedAt = data.deletedAt;
    this.publishedAt = new Date();
    this.features = data.features;
    this.subscriptions = data.subscriptions;
    this.notifications = data.notifications;
    this.memberships = data.memberships;
  }
}
