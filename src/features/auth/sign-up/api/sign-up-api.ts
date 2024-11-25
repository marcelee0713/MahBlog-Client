import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import { SignUpFormData } from "../ts/interfaces/sign-up-interface";

export const signUpUser = async (
  data: SignUpFormData,
  { onLoading, onError, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/sign-up`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
