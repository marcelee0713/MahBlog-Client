import { create } from "zustand";
import { User, UserState } from "../ts/interfaces/user.interface";
import useSWR from "swr";
import { getUser } from "../api/user.api";
import { ErrorObject } from "../ts/interfaces/global";
import { redirect } from "next/navigation";

const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  useFetchUser: () => {
    const { data } = useSWR<User | null>("/api/user", getUser, {
      refreshInterval: 60000,
      revalidateOnFocus: false,
      onError(err) {
        const error = err as ErrorObject;
        if (error.code === "unrecognized-device") redirect(error.message);
      },
    });

    if (!data) return set({ user: null });

    return set({ user: data });
  },
}));

export default useUserStore;
