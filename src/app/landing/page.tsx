import json from "../../../public/LandingPageAnimation.json";
import { LandingPageContent } from "@/components/landing_page";

export default function LandingPage() {
  return (
    <main className="flex items-center justify-center h-full w-full container mx-auto px-8 py-9">
      <LandingPageContent animation={json} />
    </main>
  );
}
