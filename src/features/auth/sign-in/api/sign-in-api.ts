import apiUrl from "@/config";
import { SignInFormData } from "../ts/interfaces/sign-in-interface";
import { CallbacksInterface } from "@/ts/interfaces/global";
import { ParseError } from "@/utils";

// TODO: Modify this response
// In order to store the token in the Web browser's cookies.
export const signInUser = async (
  data: SignInFormData,
  { onLoading, onError, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`${apiUrl}/user/sign-in`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  const token = res.headers.get("Authorization")?.split(" ")[1];

  return onSuccess(token);
};
