import { TopBar } from "@/components/top-bar/TopBar";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-full w-full">
      <TopBar />
      {children}
    </div>
  );
}
