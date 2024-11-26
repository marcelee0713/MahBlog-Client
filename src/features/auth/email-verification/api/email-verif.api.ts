import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { EmailVerifyReq } from "../ts/interfaces/email-verif-interface";
import { ParseError } from "@/shared/utils";

export const verifyUserEmail = async (
  data: EmailVerifyReq,
  { onLoading, onSuccess, onError }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/email-verification`, {
    body: JSON.stringify({
      ...data,
      token: data.token ?? "",
    }),
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
