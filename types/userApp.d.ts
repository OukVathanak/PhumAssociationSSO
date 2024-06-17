export interface UserApp {
  id: number;
  phone: string;
  email: string;
  isActive: boolean;
  lastLoginAt?: Date;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserAppDTO {
  id: number;
  phone: string;
  email: string;
  isActive: boolean;
  lastLoginAt?: Date;
  publishedAt?: Date;
}
