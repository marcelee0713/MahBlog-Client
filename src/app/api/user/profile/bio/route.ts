import apiUrl from "@/config";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const body = await req.json();

  const res = await fetch(`${apiUrl}/user-profile/update-bio`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
    },
    mode: "cors",
    body: JSON.stringify(body),
    method: "PUT",
  });

  if (!res.ok) return await ParseRawError(res);

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
