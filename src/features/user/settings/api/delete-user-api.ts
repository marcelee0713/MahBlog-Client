import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";

export const deleteUser = async ({
  onLoading,
  onError,
  onSuccess,
}: CallbacksInterface): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
