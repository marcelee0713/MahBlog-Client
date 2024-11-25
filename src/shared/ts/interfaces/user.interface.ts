import { Roles, Status } from "../types/user.types";

export interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  useFetchUser: () => void;
  clearUser: () => void;
}

export interface User {
  userId: string;
  email: string;
  role: Roles;
  status: Status;
  emailVerifiedAt: Date | null;
  createdAt: Date;
}
