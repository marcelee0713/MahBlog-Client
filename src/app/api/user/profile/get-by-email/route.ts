import apiUrl from "@/config";
import { FoundUserData } from "@/features/auth/forgot-password/ts/interface/forgot-pass-interface";
import { ResponseBody } from "@/shared/ts/interfaces/global";
import { ParseRawError } from "@/shared/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${apiUrl}/user-profile/get-by-email`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(body),
    method: "POST",
  });

  if (!res.ok) return await ParseRawError(res);

  const response: ResponseBody<FoundUserData> = await res.json();

  const obj: FoundUserData = response.data;

  return new Response(JSON.stringify(obj), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
