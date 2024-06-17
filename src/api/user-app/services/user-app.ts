/**
 * user-app service
 */

import { factories } from "@strapi/strapi";
import { UserApp } from "../../../../types/userApp";

export default factories.createCoreService("api::user-app.user-app");

export class UserAppDVO {
  id: number;
  phone: string;
  email: string;
  lastLoginAt?: Date;

  constructor(data: UserApp) {
    this.id = data.id;
    this.phone = data.phone;
    this.email = data.email;
    this.lastLoginAt = data.lastLoginAt;
  }
}
