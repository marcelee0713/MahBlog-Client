import { CallbacksInterface } from "@/shared/ts/interfaces/global";
import { ParseError } from "@/shared/utils";
import { PfpRes } from "../ts/interfaces/profile-interfaces";

export const updateProfileCover = async (
  image: File,
  { onLoading, onError, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  const formData = new FormData();

  formData.append("cover", image);

  const res = await fetch("/api/user/profile/cover", {
    body: formData,
    method: "PUT",
    mode: "cors",
  });

  console.log(res);

  if (!res.ok) return onError(await ParseError(res));

  const { imageUrl }: PfpRes = await res.json();

  return onSuccess(imageUrl);
};

export const deleteProfileCover = async (
  image: string | null,
  { onLoading, onError, onSuccess }: CallbacksInterface
): Promise<void> => {
  onLoading();

  if (!image)
    return onError({
      message: "An unexpected error occured!",
      code: "",
      cause: null,
      where: null,
    });

  const formData = new FormData();

  formData.append("pfp", image);

  const res = await fetch("/api/user/profile/cover", {
    body: JSON.stringify({
      image,
    }),
    method: "DELETE",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return onError(await ParseError(res));

  return onSuccess(null);
};
