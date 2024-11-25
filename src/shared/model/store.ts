import { create } from "zustand";
import { User, UserState } from "../ts/interfaces/user.interface";
import useSWR from "swr";
import { getUser } from "../api/user.api";

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  useFetchUser: () => {
    const { data } = useSWR<User | null>("/api/user", getUser, {
      refreshInterval: 60000,
      revalidateOnFocus: false,
    });

    if (!data) return set({ user: null });

    return set({ user: data });
  },
}));

export default useUserStore;
