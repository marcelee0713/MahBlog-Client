import { ErrorResponse } from "../ts/interfaces/global";
import { UserProfile } from "../ts/interfaces/user.interface";

export const getUserProfile = async (
  route: string
): Promise<UserProfile | null> => {
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

  const data: UserProfile = await res.json();

  return data;
};
