import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";

export const emailChangeConfirmation = async (
  token: string,
  { onLoading, onSuccess, onError }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/change-email`, {
    body: JSON.stringify({
      token,
    }),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
