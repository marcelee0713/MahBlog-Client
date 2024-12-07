import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import { ChangeEmailFormData } from "../ts/interface/settings-interfaces";

export const changeEmail = async (
  data: ChangeEmailFormData,
  { onLoading, onError, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/change-email`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
