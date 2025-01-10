import { CallbacksInterface, ErrorResponse } from "../ts/interfaces/global";
import { User } from "../ts/interfaces/user.interface";
import { ParseError } from "../utils";

export const getUser = async (route: string): Promise<User | null> => {
  const res = await fetch(route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    const resObj: ErrorResponse = await res.json();

    throw resObj.error;
  }

  const data: User = await res.json();

  return data;
};

export const signOutUser = async ({
  onLoading,
  onSuccess,
  onError,
}: CallbacksInterface): Promise<void> => {
  onLoading();

  const res = await fetch("/api/user/sign-out", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};

export const deleteOAuthUser = async (
  { onLoading, onSuccess, onError }: CallbacksInterface,
  token: string
): Promise<void> => {
  onLoading();

  const res = await fetch("/api/user/goodbye", {
    body: JSON.stringify({
      token,
    }),
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
