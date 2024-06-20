/**
 * auth-method service
 */

import { factories } from "@strapi/strapi";
import { AuthMethod, AuthMethodDTO } from "../../../../types/authMethod";
import { QueryParams } from "../../../utils/interface";
import { UserApp } from "../../../../types/userApp";

export default factories.createCoreService(
  "api::auth-method.auth-method",
  ({ strapi }) => {
    return {
      async getManyAuthMethod(params: QueryParams): Promise<AuthMethodDVO[]> {
        try {
          const authMethods = (await strapi.entityService.findMany(
            "api::auth-method.auth-method",
            { ...params } as any
          )) as AuthMethod[];

          if (authMethods.length === 0) {
            return [];
          }

          return authMethods.map(
            (authMethod) => new AuthMethodDVO(authMethod as AuthMethod)
          );
        } catch (error) {
          throw new Error(error);
        }
      },

      async getOneAuthMethod(params: QueryParams): Promise<AuthMethodDVO> {
        try {
          const authMethod = (await strapi.entityService.findOne(
            "api::auth-method.auth-method",
            { ...params } as any
          )) as AuthMethod;

          if (!authMethod) {
            return null;
          }

          return new AuthMethodDVO(authMethod);
        } catch (error) {
          throw new Error(error);
        }
      },

      async postAuthMethod(payload: AuthMethodDTO): Promise<AuthMethodDVO> {
        try {
          const authMethod = (await strapi.entityService.create(
            "api::auth-method.auth-method",
            { data: payload }
          )) as AuthMethod;

          return new AuthMethodDVO(authMethod);
        } catch (error) {
          throw new Error(error);
        }
      },

      async putAuthMethod(payload: AuthMethodDTO): Promise<AuthMethodDVO> {
        try {
          const authMethod = (await strapi.entityService.update(
            "api::auth-method.auth-method",
            payload.id,
            { data: payload }
          )) as AuthMethod;

          return new AuthMethodDVO(authMethod);
        } catch (error) {
          throw new Error(error);
        }
      },
    };
  }
);

export class AuthMethodDVO {
  id: number;
  identifier: string;
  type: string;
  strategy: string;
  password?: string;
  passToken?: string;
  identifierToken?: string;
  verifyToken?: string;
  userApp?: UserApp;

  constructor(data: AuthMethod) {
    this.id = data.id;
    this.identifier = data.identifier;
    this.type = data.type;
    this.strategy = data.strategy;
    this.passToken = data.password;
    this.passToken = data.passToken;
    this.identifierToken = data.identifierToken;
    this.verifyToken = data.verifyToken;
    this.userApp = data.userApp;
  }
}
