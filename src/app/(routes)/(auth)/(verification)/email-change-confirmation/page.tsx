import { EmailChangeConfirmationContent } from "@/features/auth/email-change-confirmation/EmailChangeConfirmationContent";

export default function EmailChangeConfirmationPage() {
  return (
    <main className="relative flex items-center justify-center h-full w-full container mx-auto px-8 py-9">
      <EmailChangeConfirmationContent />
    </main>
  );
}
