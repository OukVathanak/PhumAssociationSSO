/**
 * otp service
 */

import { factories } from "@strapi/strapi";
import { UserApp } from "../../../../types/userApp";
import { OTP } from "../../../../types/otp";

export default factories.createCoreService("api::otp.otp");

export class OTPDVO {
  id: number;
  code: string;
  isUsed: boolean;
  token: string;
  expiredAt: Date;
  publishedAt?: Date;
  userApp?: UserApp;

  constructor(data: OTP) {
    this.id = data.id;
    this.code = data.code;
    this.isUsed = data.isUsed;
    this.token = data.token;
    this.expiredAt = data.expiredAt;
    this.publishedAt = data.publishedAt;
    this.userApp = data.userApp;
  }
}
