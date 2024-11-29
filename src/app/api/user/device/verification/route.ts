import apiUrl from "@/config";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  const body = await req.json();

  const deviceId = cookieStore.get("device-id");

  const res = await fetch(`${apiUrl}/user/verify-device`, {
    headers: {
      "Content-Type": "application/json",
      "Device-ID": `${deviceId?.value}`,
    },
    mode: "cors",
    body: JSON.stringify(body),
    method: "POST",
  });

  if (!res.ok) return await ParseRawError(res);

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
