import { Context, Next } from "koa";
import { Schema } from "joi";

const validateRequestBody = (schema: Schema) => {
  return async (ctx: Context, next: Next) => {
    const { error } = schema.validate(ctx.request["body"]);
    if (error) {
      ctx.throw(
        400,
        `Validation error: ${error.details.map((x) => x.message).join(", ")}`
      );
    } else {
      await next();
    }
  };
};

export default validateRequestBody;
