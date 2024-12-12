import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";

export const updateBio = async (
  { onLoading, onError, onSuccess }: CallbacksInterface,
  bio?: string
): Promise<void> => {
  onLoading();

  const res = await fetch("/api/user/profile/bio", {
    body: JSON.stringify({
      bio,
    }),
    method: "PUT",
    mode: "cors",
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
