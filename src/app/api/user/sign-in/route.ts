import apiUrl from "@/config";
import { SignInFormData } from "@/features/auth/sign-in/ts/interfaces/sign-in-interface";
import { ParseRawError, SendErrorResponse } from "@/shared/utils";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body: SignInFormData = await req.json();

  const res = await fetch(`${apiUrl}/user/sign-in`, {
    headers: {
      "Content-Type": "application/json",
    },
    mode: "cors",
    credentials: "include",
    body: JSON.stringify(body),
    method: "POST",
  });

  if (!res.ok) return await ParseRawError(res);

  const token = res.headers.get("Authorization")?.split(" ")[1];

  if (!token) {
    return SendErrorResponse(500, {
      code: "missing-token",
      message: "Missing token in the header, please report it to the devs!",
      cause: null,
      where: null,
    });
  }

  (await cookies()).set("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return new Response(JSON.stringify({}), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
