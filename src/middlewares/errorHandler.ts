import { Middleware } from "koa";
import { Strapi } from "@strapi/strapi";
// import { logger } from "../external-service/logger";
require("dotenv");

interface Config {
  // ---------- Custom Configuration ----------
}

const globalErrorHandling: Middleware = (
  config: Config,
  { strapi }: { strapi: Strapi }
) => {
  return async (ctx, next) => {
    try {
      await next();
    } catch (error: any) {
      // Console log error
      console.log(process.env.SERVER_STATE == "development" ? error : null);

      // Get error status | message | stack
      const statusCode = ctx.status || 500;
      const message = error.message || "An unexpected error occured";
      const stack =
        process.env.SERVER_STATE == "development"
          ? error.details || error.stack || null
          : null;

      // Make response body
      const responseBody = {
        status: statusCode,
        message: message,
        stack: stack,
      };

      // Log error
      // logger.error({
      //   status: statusCode,
      //   message: message,
      //   request: ctx.request,
      //   response: ctx.response,
      // });

      // Response status
      ctx.status = error.status;

      // Response body
      ctx.body = responseBody;
    }
  };
};

export default globalErrorHandling;
