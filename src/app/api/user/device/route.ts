import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const cookieStore = await cookies();
  const existingDeviceId = cookieStore.get("device-id");

  if (existingDeviceId) {
    return NextResponse.json({
      message: "Device ID already exists",
      deviceId: existingDeviceId.value,
    });
  }

  const newDeviceId = randomUUID();

  const response = NextResponse.json({ deviceId: newDeviceId });

  response.cookies.set("device-id", newDeviceId, {
    path: "/",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });

  return response;
}
