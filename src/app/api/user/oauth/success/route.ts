import apiUrl from "@/config";
import { SendErrorResponse } from "@/shared/utils";
import { cookies } from "next/headers";
import { permanentRedirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  const cookieStore = await cookies();

  if (!token) {
    return SendErrorResponse(500, {
      code: "missing-token",
      message: "Missing token in the header, please report it to the devs!",
      cause: null,
      where: null,
    });
  }

  const currentToken = cookieStore.get("token");

  //TODO: Create a route for storing the DeviceId in the database since this is the final stage of OAuth.

  if (currentToken) {
    try {
      const response = await fetch(`${apiUrl}/user/sign-out`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${currentToken.value}`,
        },
        mode: "cors",
        method: "DELETE",
      });

      if (!response.ok) {
        console.warn("Sign-out failed:", response.status);
      }
    } catch (error) {
      console.warn("Fetch error occurred:", error);
    }
  }

  cookieStore.set("token", token, {
    httpOnly: true,
    maxAge: 30 * 24 * 60 * 60,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });

  return permanentRedirect("/");
}
