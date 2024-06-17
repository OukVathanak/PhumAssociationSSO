import { Media } from "../src/utils/interface";

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
