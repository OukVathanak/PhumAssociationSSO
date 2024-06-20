/**
 * auth-method controller
 */

import { factories } from "@strapi/strapi";
import { UserApp } from "../../../../types/userApp";
import { UserProfileDTO } from "../../../../types/userProfile";
import { AuthMethodDTO, NativeRegisterDTO } from "../../../../types/authMethod";
import { validateOrReject } from "class-validator";
import { QueryParams } from "../../../utils/interface";
import {
  HTTPCode,
  createErrorResponse,
  createSuccessResponse,
} from "../../../utils/response";
import { OTPAuthToken } from "../../../../types/otp";
import CryptoEncode from "../../../utils/cryptoEncode";

export default factories.createCoreController(
  "api::auth-method.auth-method",
  ({ strapi }) => {
    return {
      async nativeRegister(ctx) {
        try {
          // Get data from request body
          const registerDTO = new NativeRegisterDTO(ctx.request.body);

          // Validate request
          await validateOrReject(registerDTO).catch((errors) => {
            ctx.throw(400, errors.message);
          });

          // User query params
          const userQueryParams: QueryParams = {
            where: {
              $and: [
                { phone: { $eq: registerDTO.phone } },
                { isActive: { $eq: true } },
                { deletedAt: { $null: true } },
              ],
            },
          };

          // Query user
          const findUser: UserApp[] = await strapi
            .service("api::user-app.user-app")
            .getManyUserApp(userQueryParams);

          // Check if user already exist
          if (findUser.length > 0) {
            const response = createErrorResponse(HTTPCode.BAD_REQUEST);
            ctx.throw(response.statusCode, "User already exist");
          }

          // Create user
          const userCreate: UserApp = await strapi
            .service("api::user-app.user-app")
            .postUserApp(registerDTO.getUserAppDTO());

          // User profile payload
          let userProfilePayload: UserProfileDTO =
            registerDTO.getUserProfileDTO();
          userProfilePayload.userApp = userCreate;

          // Create user profile
          await strapi
            .service("api::user-profile.user-profile")
            .postUserProfile(userProfilePayload);

          // Auth method payload
          let authMethodPayload: AuthMethodDTO =
            await registerDTO.getAuthMethodDTO();
          authMethodPayload.userApp = userCreate;

          // Create auth method
          await strapi
            .service("api::auth-method.auth-method")
            .postAuthMethod(authMethodPayload);

          // Create OTP auth token payload
          const otpAuthTokenPayload: OTPAuthToken = {
            id: userCreate.id,
            phone: userCreate.phone,
          };

          // Create OTP auth token
          const otpAuthToken: string = CryptoEncode.encode(otpAuthTokenPayload);

          // Create response
          const response = createSuccessResponse(HTTPCode.SUCCESS, {
            token: otpAuthToken,
          });
          ctx.send(response, response.statusCode);
        } catch (error) {
          ctx.throw(error.statusCode, error.message);
        }
      },
    };
  }
);
