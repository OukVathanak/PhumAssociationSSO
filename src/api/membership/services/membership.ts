/**
 * membership service
 */

import { factories } from "@strapi/strapi";
import { Association } from "../../../../types/association";
import { UserProfile } from "../../../../types/userProfile";
import { Membership } from "../../../../types/membership";

export default factories.createCoreService("api::membership.membership");

export class MembershipDVO {
  id: number;
  memberID: number;
  memberCode: string;
  association?: Association;
  userProfile?: UserProfile;

  constructor(data: Membership) {
    this.id = data.id;
    this.memberID = data.memberID;
    this.memberCode = data.memberCode;
    this.association = data.association;
    this.userProfile = data.userProfile;
  }
}
