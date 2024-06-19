export interface UserApp {
  id: number;
  phone: string;
  email?: string;
  isActive?: boolean;
  lastLoginAt?: Date;
  deletedAt?: Date;
  publishedAt?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

export class UserAppDTO {
  id?: number;
  phone: string;
  email?: string;
  isActive?: boolean;
  lastLoginAt?: Date;
  publishedAt?: Date;

  constructor(data: UserApp) {
    this.id = data.id;
    this.phone = data.phone;
    this.email = data.email;
    this.isActive = data.isActive;
    this.lastLoginAt = data.lastLoginAt;
    this.publishedAt = data.publishedAt;
  }
}
