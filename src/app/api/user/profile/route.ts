import apiUrl from "@/config";
import { ResponseBody } from "@/shared/ts/interfaces/global";
import { UserProfile } from "@/shared/ts/interfaces/user.interface";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const res = await fetch(`${apiUrl}/user-profile`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
    },
    mode: "cors",
    method: "GET",
  });

  if (!res.ok) return await ParseRawError(res);

  const body: ResponseBody<UserProfile> = await res.json();

  const obj: UserProfile = body.data;

  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
