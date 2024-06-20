/**
 * user-app service
 */

import { factories } from "@strapi/strapi";
import { UserApp, UserAppDTO } from "../../../../types/userApp";
import { QueryParams } from "../../../utils/interface";
import { AuthMethod } from "../../../../types/authMethod";
import { UserProfile } from "../../../../types/userProfile";
import { Session } from "../../../../types/session";
import { OTP } from "../../../../types/otp";

export default factories.createCoreService(
  "api::user-app.user-app",
  ({ strapi }) => {
    return {
      async getManyUserApp(params: QueryParams): Promise<UserAppDVO[]> {
        try {
          const userApps = (await strapi
            .query("api::user-app.user-app")
            .findMany(params)) as UserApp[];

          if (userApps.length === 0) {
            return [];
          }

          return userApps.map((userApp) => new UserAppDVO(userApp as UserApp));
        } catch (error) {
          throw new Error(error);
        }
      },

      async postUserApp(payload: UserAppDTO): Promise<UserAppDVO> {
        try {
          const userApp = (await strapi.entityService.create(
            "api::user-app.user-app",
            { data: payload }
          )) as UserApp;

          return new UserAppDVO(userApp);
        } catch (error) {
          throw new Error(error);
        }
      },
    };
  }
);

export class UserAppDVO {
  id: number;
  phone: string;
  email: string;
  lastLoginAt?: Date;
  authMethods?: AuthMethod[];
  userProfile?: UserProfile;
  sessions?: Session[];
  otps?: OTP[];

  constructor(data: UserApp) {
    this.id = data.id;
    this.phone = data.phone;
    this.email = data.email;
    this.lastLoginAt = data.lastLoginAt;
    this.authMethods = data.authMethods;
    this.userProfile = data.userProfile;
    this.sessions = data.sessions;
    this.otps = data.otps;
  }
}
