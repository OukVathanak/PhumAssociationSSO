import { Association } from "./association";
import { Package } from "./package";

export interface Subscription {
  id: number;
  startedAt: Date;
  expiredAt: Date;
  association?: Association;
  package?: Package;
}
