import apiUrl from "@/config";
import { SignUpFormData } from "@/features/auth/sign-up/ts/interfaces/sign-up-interface";
import { ParseRawError } from "@/shared/utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body: SignUpFormData = await req.json();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { cfrmPassword, ...rest } = body;

  const res = await fetch(`${apiUrl}/user/sign-up`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify(rest),
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
