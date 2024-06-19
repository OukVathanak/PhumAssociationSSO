import { Association } from "./association";
import { UserProfile } from "./userProfile";

export interface Membership {
  id: number;
  memberID: number;
  code: string;
  association?: Association;
  userProfile?: UserProfile;
}
