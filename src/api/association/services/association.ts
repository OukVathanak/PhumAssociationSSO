/**
 * association service
 */

import { factories } from "@strapi/strapi";
import { QueryParams } from "../../../utils/interface";
import { Association } from "../../../../types/association";
import { Media } from "../../../utils/interface";
import { Feature } from "../../../../types/feature";
import { Subscription } from "../../../../types/subscription";
import { Notification } from "../../../../types/notification";
import { Membership } from "../../../../types/membership";

export default factories.createCoreService(
  "api::association.association",
  ({ strapi }) => {
    return {
      async getManyAssociation(params: QueryParams): Promise<AssociationDVO[]> {
        try {
          const associations = (await strapi.entityService.findMany(
            "api::association.association",
            { ...params } as any
          )) as Association[];
          if (associations.length === 0) {
            return [];
          }

          return associations.map(
            (association) => new AssociationDVO(association as Association)
          );
        } catch (error) {
          throw new Error(error);
        }
      },
    };
  }
);

export class AssociationDVO {
  id: number;
  name: string;
  desc: string;
  contact: string;
  url: string;
  code: string;
  logo?: Media;
  features?: Feature[];
  subscriptions?: Subscription[];
  notifications?: Notification[];
  memberships?: Membership[];

  constructor(data: Association) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.contact = data.contact;
    this.url = data.url;
    this.code = data.code;
    this.logo = data.logo;
    this.features = data.features;
    this.subscriptions = data.subscriptions;
    this.notifications = data.notifications;
  }
}
