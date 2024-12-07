import apiUrl from "@/config";
import { ChangeEmailFormData } from "@/features/user/settings/ts/interface/settings-interfaces";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const body: ChangeEmailFormData = await req.json();

  const res = await fetch(`${apiUrl}/user/req-change-email`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
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

export async function PUT(req: NextRequest) {
  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const body: ChangeEmailFormData = await req.json();

  const res = await fetch(`${apiUrl}/user/change-email`, {
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

  cookieStore.delete("token");

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
