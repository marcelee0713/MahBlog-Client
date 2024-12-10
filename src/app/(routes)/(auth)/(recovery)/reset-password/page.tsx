import { ResetPasswordContent } from "@/features/auth/reset-password/ResetPasswordContent";
import { Suspense } from "react";

export default function ForgotPassword() {
  return (
    <Suspense>
      <ResetPasswordContent />
    </Suspense>
  );
}
