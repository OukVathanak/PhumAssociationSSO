/**
 * session service
 */

import { factories } from "@strapi/strapi";
import {
  Session,
  SessionStrategy,
  SessionType,
} from "../../../../types/session";
import { UserApp } from "../../../../types/userApp";

export default factories.createCoreService("api::session.session");

export class SessionDTO {
  id: number;
  strategy: SessionStrategy;
  type: SessionType;
  isActive?: boolean;
  expiredAt: Date;
  token: string;
  deviceName?: string;
  deviceID?: string;
  fcm?: string;
  userApp?: UserApp;

  constructor(data: Session) {
    this.id = data.id;
    this.strategy = data.strategy;
    this.type = data.type;
    this.isActive = data.isActive;
    this.expiredAt = data.expiredAt;
    this.token = data.token;
    this.deviceName = data.deviceName;
    this.deviceID = data.deviceID;
    this.fcm = data.fcm;
    this.userApp = data.userApp;
  }
}
