import { SignInPageContent } from "@/features/auth/sign-in/SignInForm";
import animation from "../../../../public/lottie/SignInPageAnimation.json";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center h-full w-full px-8 py-9">
      <SignInPageContent animation={animation} />
    </main>
  );
}
