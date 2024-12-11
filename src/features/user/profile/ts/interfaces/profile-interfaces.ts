import { UserProfile } from "@/shared/ts/interfaces/user.interface";

export interface UserProfileContentState {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;
  setEditable: (editable: boolean) => void;
  editable: boolean;
}

export interface PfpRes {
  imageUrl: string;
}
