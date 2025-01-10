import apiUrl from "@/config";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function DELETE(req: NextRequest) {
  const body = await req.json();
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const res = await fetch(`${apiUrl}/user/delete-user-oauth`, {
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
    },
    mode: "cors",
    method: "DELETE",
  });

  if (!res.ok) return await ParseRawError(res);

  cookieStore.delete("token");

  return new Response(JSON.stringify({}), {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
