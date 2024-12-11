import apiUrl from "@/config";
import { PfpRes } from "@/features/user/profile/ts/interfaces/profile-interfaces";
import { ResponseBody } from "@/shared/ts/interfaces/global";
import { ParseRawError } from "@/shared/utils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const formData = await req.formData();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const res = await fetch(`${apiUrl}/user-profile/update-pic`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
    },
    body: formData,
    mode: "cors",
    method: "PUT",
  });

  if (!res.ok) return await ParseRawError(res);

  const body: ResponseBody<PfpRes> = await res.json();

  const obj: PfpRes = body.data;

  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function DELETE(req: NextRequest) {
  const body = await req.json();

  const cookieStore = await cookies();

  const token = cookieStore.get("token")?.value ?? "";

  const deviceId = cookieStore.get("device-id")?.value ?? "";

  const res = await fetch(`${apiUrl}/user-profile/remove-pic`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      "Device-ID": `${deviceId}`,
    },
    body: JSON.stringify(body),
    mode: "cors",
    method: "DELETE",
  });

  if (!res.ok) return await ParseRawError(res);

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
