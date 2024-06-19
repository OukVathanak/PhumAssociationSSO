/**
 * auth-method router
 */

import validateRequestBody from "../../../middlewares/requestBodyValidation";
import { nativeRegisterSchema } from "../../../utils/routeSchema";

// import { factories } from '@strapi/strapi';

// export default factories.createCoreRouter('api::auth-method.auth-method');

module.exports = {
  routes: [
    {
      method: "POST",
      path: "/auth/native/register",
      handler: "auth-method.nativeRegister",
      config: {
        auth: false,
        middlewares: [validateRequestBody(nativeRegisterSchema)],
      },
    },
  ],
};
