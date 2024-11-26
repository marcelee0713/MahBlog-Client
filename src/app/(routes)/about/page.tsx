import { AboutHeader } from "@/components/about/AboutHeader";
import { AboutPageContent } from "@/components/about/AboutPageContent";

export default function AboutPage() {
  return (
    <main className="flex flex-col h-full w-full">
      <AboutHeader />
      <AboutPageContent />
    </main>
  );
}
