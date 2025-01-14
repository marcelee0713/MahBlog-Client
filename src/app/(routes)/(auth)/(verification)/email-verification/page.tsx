"use client";

import { EmailVerificationContent } from "@/features/auth/email-verification/EmailVerificationContent";
import { Suspense } from "react";

export default function EmailVerificationPage() {
  return (
    <main className="relative flex items-center justify-center h-full w-full container mx-auto px-8 py-9">
      <Suspense>
        <EmailVerificationContent />
      </Suspense>
    </main>
  );
}
