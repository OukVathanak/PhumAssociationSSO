import jwt from "jsonwebtoken";
import { UserApp } from "../../types/userApp";
require("dotenv");

export interface JWTPayload {
  user: UserApp;
  sessionToken: string;
}

export interface DecodedJWT {
  status: JWTVerifyStatus;
  jwt: JWTPayload | null;
}

export enum JWTVerifyStatus {
  VALID = "Valid",
  EXPIRED = "Expired",
  INVALID = "Invalid",
}

export class JWTService {
  private static secret: string = process.env.JWT_SECRET || "defaultSecret";
  private static duration: string = process.env.JWT_DURATION || "1h";

  // ---------- Generate JWT token ----------
  static generateJWT(payload: JWTPayload): string {
    return jwt.sign(payload, this.secret, {
      expiresIn: this.duration,
    }) as string;
  }

  // ---------- Validate JWT token ----------
  static validateJWT(token: string): DecodedJWT {
    let decodedToken: JWTPayload | null = null;
    let isTokenValid: JWTVerifyStatus = JWTVerifyStatus.VALID;

    try {
      // Verify if token is valid
      decodedToken = jwt.verify(token, this.secret) as JWTPayload;
    } catch (error) {
      // Check if token is expired
      if (error instanceof jwt.TokenExpiredError) {
        isTokenValid = JWTVerifyStatus.EXPIRED;
        decodedToken = jwt.decode(token) as JWTPayload;
      } else {
        // If token not expired then its invalid
        isTokenValid = JWTVerifyStatus.INVALID;
      }
    }

    return { status: isTokenValid, jwt: decodedToken };
  }
}
