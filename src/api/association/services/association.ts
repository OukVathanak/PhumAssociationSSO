/**
 * association service
 */

import { factories } from "@strapi/strapi";
import { QueryParams } from "../../../utils/interface";
import { Association } from "../../../../types/association";
import { Media } from "../../../utils/interface";

export default factories.createCoreService(
  "api::association.association",
  ({ strapi }) => {
    return {
      async getManyAssociation(params: QueryParams): Promise<AssociationDVO[]> {
        try {
          const associations = await strapi
            .query("api::association.association")
            .findMany(params);

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

  constructor(data: Association) {
    this.id = data.id;
    this.name = data.name;
    this.desc = data.desc;
    this.contact = data.contact;
    this.url = data.url;
    this.code = data.code;
    this.logo = data.logo;
  }
}
