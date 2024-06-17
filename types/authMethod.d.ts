export interface AuthMethod {
  id: number;
  identifier: string;
  type: string;
  strategy: string;
  password?: string;
  passToken?: string;
  idToken?: string;
  verifyToken?: string;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AuthMethodDTO {
  id: number;
  identifier: string;
  type: string;
  strategy: string;
  password?: string;
  passToken?: string;
  idToken?: string;
  verifyToken?: string;
  deletedAt?: Date;
  publishedAt?: Date;
}

export enum AuthType {
  PASSWORD = "Password",
  TOKEN = "Token",
  BIOMETRIC = "Biometric",
}

export enum AuthStrategy {
  NATIVE = "Native",
  GOOGLE = "Google",
  APPLE = "Apple",
  FACEBOOK = "Facebook",
}
