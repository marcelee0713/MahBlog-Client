import { User } from "../ts/interfaces/user.interface";

export const getUser = async (route: string): Promise<User | null> => {
  const res = await fetch(route, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) return null;

  const data: User = await res.json();

  return data;
};
