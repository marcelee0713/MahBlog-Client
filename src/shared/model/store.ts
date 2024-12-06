import { create } from "zustand";
import { UserProfileState, UserState } from "../ts/interfaces/user.interface";

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  toggleFetch: (toggle) => set({ canFetch: toggle }),
  canFetch: true,
}));

export const useUserProfileStore = create<UserProfileState>((set) => ({
  profile: null,
  setProfile: (profile) => set({ profile }),
  clearUserProfile: () => set({ profile: null }),
}));
