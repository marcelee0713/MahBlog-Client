import { redirect } from "next/navigation";
import useSWR from "swr";
import { getUser } from "../api/user.api";
import { useUserStore } from "../model/store";
import { ErrorObject } from "../ts/interfaces/global";

const useUser = () => {
  const { user, setUser, clearUser, canFetch, toggleFetch } = useUserStore();

  const { error, isLoading, mutate } = useSWR(
    canFetch ? "/api/user" : null,
    getUser,
    {
      refreshInterval: 60000,
      revalidateOnFocus: false,
      onSuccess(data) {
        setUser(data);
      },
      onError(error) {
        const err = error as ErrorObject;

        clearUser();

        toggleFetch(false);

        if (err.code === "unrecognized-device") redirect(err.message);
      },
    }
  );

  return {
    user,
    setUser,
    error,
    isLoading,
    fetchUser: mutate,
    toggleFetch,
    clearUser,
  };
};

export default useUser;
