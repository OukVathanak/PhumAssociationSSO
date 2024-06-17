export const HTTPCode = {
  INTERNAL_SERVER_ERROR: { code: 500, message: "Internal Server Error" },
  CONFLICT: { code: 409, message: "Conflict" },
  NOT_FOUND: { code: 404, message: "Not Found" },
  FORBIDDEN: { code: 403, message: "Forbidden" },
  UNAUTHORIZE: { code: 401, message: "Unauthorized" },
  BAD_REQUEST: { code: 400, message: "Bad Request" },
  SUCCESS: { code: 200, message: "Success" },
};

export interface APIResponse<T> {
  status: "success" | "error";
  statusCode: number;
  data?: T;
  error?: string;
}

export function createSuccessResponse<T>(
  status: any,
  data?: T
): APIResponse<T> {
  return {
    status: "success",
    statusCode: status.code,
    data,
  };
}

export function createErrorResponse(status: any): APIResponse<undefined> {
  return {
    status: "error",
    statusCode: status.code,
    error: status.message,
  };
}
