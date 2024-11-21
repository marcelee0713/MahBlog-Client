import { SignInPageContent } from "@/components/auth/sign_in_page";
import animation from "../../../../public/SignInPageAnimation.json";

export default function SignInPage() {
  return (
    <main className="flex items-center justify-center h-full w-full px-8 py-9">
      <SignInPageContent animation={animation} />
    </main>
  );
}
