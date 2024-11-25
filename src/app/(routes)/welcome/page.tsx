import { WelcomePageContent } from "@/components/welcome/WelcomePageContent";
import json from "../../../../public/lottie/WelcomePageAnimation.json";

export default function WelcomePage() {
  return (
    <main className="flex items-center justify-center h-full w-full container mx-auto px-8 py-9">
      <WelcomePageContent animation={json} />
    </main>
  );
}
