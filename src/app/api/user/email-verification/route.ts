import apiUrl from "@/config";
import { ParseRawError } from "@/shared/utils";
import { NextRequest } from "next/server";

export async function PUT(req: NextRequest) {
  const body = await req.json();

  const res = await fetch(`${apiUrl}/user/verify-email`, {
    headers: {
      "Content-Type": "application/json",
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
