import { create } from "zustand";
import { UserProfileContentState } from "../ts/interfaces/profile-interfaces";

export const useUserProfileContentState = create<UserProfileContentState>(
  (set) => ({
    profile: null,
    editable: false,
    setProfile: (profile) => set({ profile }),
    setEditable: (editable) => set({ editable }),
  })
);
