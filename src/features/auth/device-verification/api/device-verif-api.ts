import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import { DeviceVerificationFormData } from "../ts/interfaces/device-verif-interface";

export const verifyUserDevice = async (
  data: DeviceVerificationFormData,
  { onLoading, onSuccess, onError }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const res = await fetch(`/api/user/device/verification`, {
    body: JSON.stringify({
      ...data,
      token: data.token ?? "",
    }),
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
