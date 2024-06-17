/**
 * auth-method service
 */

import { factories } from "@strapi/strapi";
import { AuthMethod } from "../../../../types/authMethod";

export default factories.createCoreService("api::auth-method.auth-method");

export class AuthMethodDVO {
  id: number;
  identifier: string;
  type: string;
  strategy: string;
  password?: string;
  passToken?: string;
  idToken?: string;
  verifyToken?: string;

  constructor(data: AuthMethod) {
    this.id = data.id;
    this.identifier = data.identifier;
    this.type = data.type;
    this.strategy = data.strategy;
    this.passToken = data.password;
    this.passToken = data.passToken;
    this.idToken = data.idToken;
    this.verifyToken = data.verifyToken;
  }
}
