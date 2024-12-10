"use client";
import { EmailChangeConfirmationContent } from "@/features/auth/email-change-confirmation/EmailChangeConfirmationContent";
import { Suspense } from "react";

export default function EmailChangeConfirmationPage() {
  return (
    <main className="relative flex items-center justify-center h-full w-full container mx-auto px-8 py-9">
      <Suspense>
        <EmailChangeConfirmationContent />
      </Suspense>
    </main>
  );
}
