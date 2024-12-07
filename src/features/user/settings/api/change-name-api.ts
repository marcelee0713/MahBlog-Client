import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import { ChangeNameFormData } from "../ts/interface/settings-interfaces";

export const changeName = async (
  data: ChangeNameFormData,
  { onLoading, onError, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/profile/name`, {
    body: JSON.stringify(data),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
