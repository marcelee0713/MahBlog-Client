import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import {
  ForgotPassFormData,
  FoundUserData,
} from "../ts/interface/forgot-pass-interface";

export const findUserByEmail = async (
  data: ForgotPassFormData,
  { onLoading, onSuccess, onError }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/profile/get-by-email`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  const obj: FoundUserData = await res.json();

  return onSuccess(obj);
};

export const sendResetPasswordRequest = async (
  data: ForgotPassFormData,
  { onLoading, onSuccess, onError }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/reset-password`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  const obj: FoundUserData = await res.json();

  return onSuccess(obj);
};
