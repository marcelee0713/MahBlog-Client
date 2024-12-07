import { AuthenticatedAs, Roles, Status } from "../types/user.types";

export interface UserState {
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  toggleFetch: (toggle: boolean) => void;
  canFetch: boolean;
}

export interface User {
  userId: string;
  email: string;
  role: Roles;
  status: Status;
  emailVerifiedAt: Date | null;
  createdAt: Date;
  authenticatedAs: AuthenticatedAs;
}

export interface UserProfileState {
  profile: UserProfile | null;
  setProfile: (profile: UserProfile | null) => void;
  clearUserProfile: () => void;
}

export interface UserProfile {
  profileId: string | null;
  userId: string | null;
  firstName: string;
  middleName: string | null;
  lastName: string | null;
  profilePicture: string | null;
  profileCover: string | null;
  bio: string | null;
}
