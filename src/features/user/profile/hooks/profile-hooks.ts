import { useUserProfileContentState } from "../model/store";
import useSWR from "swr";
import { getUserProfile } from "@/shared/api/user.profile.api";
import { ErrorObject } from "@/shared/ts/interfaces/global";
import { redirect } from "next/navigation";
import { UserProfile } from "@/shared/ts/interfaces/user.interface";

const useProfileContent = (
  currentProfile: UserProfile | null = null,
  userId?: string
) => {
  const { editable, profile, setEditable, setProfile } =
    useUserProfileContentState();

  const otherUser =
    currentProfile && userId && userId !== currentProfile.userId;

  const { error, mutate } = useSWR(
    otherUser ? `/api/user/profile/${userId}` : null,
    getUserProfile,
    {
      revalidateOnFocus: false,
      shouldRetryOnError: false,
      onSuccess(data) {
        setProfile(data);
        setEditable(false);
      },
      onError(error) {
        const err = error as ErrorObject;

        if (err.code === "unrecognized-device") redirect(err.message);

        setProfile(null);
      },
    }
  );

  return {
    profile,
    editable,
    error,
    setProfile,
    setEditable,
    refetch: mutate,
  };
};

export default useProfileContent;
