import { redirect } from "next/navigation";
import useSWR from "swr";
import { useUserProfileStore } from "../model/store";
import { ErrorObject } from "../ts/interfaces/global";
import { getUserProfile } from "../api/user.profile.api";
import { User } from "../ts/interfaces/user.interface";

const useProfile = (user: User | null) => {
  const { profile, setProfile, clearUserProfile } = useUserProfileStore();

  const { error, isLoading, mutate } = useSWR(
    user ? "/api/user/profile" : null,
    getUserProfile,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      revalidateOnMount: !profile,
      onSuccess(data) {
        setProfile(data);
      },
      onError(error) {
        const err = error as ErrorObject;

        if (err.code === "unrecognized-device") redirect(err.message);

        clearUserProfile();
      },
    }
  );

  return { profile, setProfile, error, isLoading, fetchProfile: mutate };
};

export default useProfile;
