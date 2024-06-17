/**
 * association controller
 */

import { factories } from "@strapi/strapi";
import { Association } from "../../../../types/association";
import { Media, QueryParams } from "../../../utils/interface";
import { HTTPCode, createSuccessResponse } from "../../../utils/response";

export default factories.createCoreController(
  "api::association.association",
  ({ strapi }) => {
    return {
      async findPublicAssociation(ctx) {
        try {
          // Query parameters
          const queryParams: QueryParams = {
            where: {
              $and: [
                { isActive: { $eq: true } },
                { isPrivate: { $eq: false } },
                { deletedAt: { $null: true } },
                { publishedAt: { $null: false } },
              ],
            },
            populate: { logo: { select: ["id", "url"] } },
          };

          // Query public associations
          const associations: Association[] = await strapi
            .service("api::association.association")
            .getManyAssociation(queryParams);

          // Remove description from associations
          associations.map((association) => delete association.desc);

          // Response
          const response = createSuccessResponse(
            HTTPCode.SUCCESS,
            associations
          );
          ctx.send(response, response.statusCode);
        } catch (error) {
          ctx.throw(error.statusCode, error.message);
        }
      },
    };
  }
);
