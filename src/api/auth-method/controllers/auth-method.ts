/**
 * auth-method controller
 */

import { factories } from "@strapi/strapi";
import { UserAppDTO } from "../../../../types/userApp";
import { UserProfileDTO } from "../../../../types/userProfile";
import { AuthMethodDTO, NativeRegisterDTO } from "../../../../types/authMethod";
import { plainToInstance } from "class-transformer";
import { validateOrReject } from "class-validator";

export default factories.createCoreController(
  "api::auth-method.auth-method",
  ({ strapi }) => {
    return {
      async nativeRegister(ctx) {
        try {
          //

          // Get data from request body
          const registerDTO = new NativeRegisterDTO(ctx.request.body);

          return { data: registerDTO.getUserAppDTO() };
        } catch (error) {
          ctx.throw(error.statusCode, error.message);
        }
      },
    };
  }
);
