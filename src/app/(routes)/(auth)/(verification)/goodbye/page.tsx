"use client";

import { GoodbyePageContent } from "@/components/goodbye/GoodbyePageContent";
import { Suspense } from "react";

export default function GoodbyePage() {
  return (
    <main className="relative flex items-center justify-center h-full w-full container mx-auto px-8 py-9">
      <Suspense>
        <GoodbyePageContent />
      </Suspense>
    </main>
  );
}
