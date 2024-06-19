/**
 * user-profile service
 */

import { factories } from "@strapi/strapi";
import { UserProfile, UserProfileDTO } from "../../../../types/userProfile";
import { QueryParams } from "../../../utils/interface";

export default factories.createCoreService(
  "api::user-profile.user-profile",
  ({ strapi }) => {
    return {
      async getManyUserProfile(params: QueryParams): Promise<UserProfileDVO[]> {
        try {
          const userProfiles = (await strapi.entityService.findMany(
            "api::user-profile.user-profile",
            { ...params } as any
          )) as UserProfile[];

          if (userProfiles.length === 0) {
            return [];
          }

          return userProfiles.map(
            (userProfile) => new UserProfileDVO(userProfile as UserProfile)
          );
        } catch (error) {
          throw new Error(error);
        }
      },

      async getOneUserProfile(params: QueryParams): Promise<UserProfileDVO> {
        try {
          const userProfile = (await strapi.entityService.findOne(
            "api::user-profile.user-profile",
            { ...params } as any
          )) as UserProfile;

          if (!userProfile) {
            return null;
          }

          return new UserProfileDVO(userProfile);
        } catch (error) {
          throw new Error(error);
        }
      },

      async postUserProfile(payload: UserProfileDTO): Promise<UserProfileDVO> {
        try {
          const userProfile = (await strapi.entityService.create(
            "api::user-profile.user-profile",
            { data: payload }
          )) as UserProfile;

          return new UserProfileDVO(userProfile);
        } catch (error) {
          throw new Error(error);
        }
      },

      async putUserProfile(payload: UserProfileDTO): Promise<UserProfileDVO> {
        try {
          const userProfile = (await strapi.entityService.update(
            "api::user-profile.user-profile",
            payload.id,
            { data: payload }
          )) as UserProfile;

          return new UserProfileDVO(userProfile);
        } catch (error) {
          throw new Error(error);
        }
      },
    };
  }
);

export class UserProfileDVO {
  id: number;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;

  constructor(data: UserProfile) {
    this.id = data.id;
    this.firstName = data.firstName;
    this.lastName = data.lastName;
    this.phone = data.phone;
    this.email = data.email;
  }
}
