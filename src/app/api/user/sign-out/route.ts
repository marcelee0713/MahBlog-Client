import apiUrl from "@/config";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";

export async function DELETE() {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const res = await fetch(`${apiUrl}/user/sign-out`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
    },
    mode: "cors",
    method: "DELETE",
  });

  cookieStore.delete("token");

  if (!res.ok) {
    if (res.status === 404 || res.status === 410) cookieStore.delete("token");

    return await ParseRawError(res);
  }

  return new Response(JSON.stringify({}), {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
