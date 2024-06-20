import { Association } from "./association";
import { UserProfile } from "./userProfile";

export interface Membership {
  id: number;
  memberID: number;
  memberCode: string;
  publishedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  association?: Association;
  userProfile?: UserProfile;
}

export class MembershipDTO {
  id?: number;
  memberID: number;
  memberCode: string;
  publishedAt?: Date;
  association?: Association | number;
  userProfile?: UserProfile | number;

  constructor(data: MembershipDTO) {
    this.id = data.id;
    this.memberID = data.memberID;
    this.memberCode = data.memberCode;
    this.publishedAt = new Date();
    this.association = data.association;
    this.userProfile = data.userProfile;
  }
}
