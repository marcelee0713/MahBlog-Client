import { MainAuthLayout } from "@/features/auth/components/AuthLayout";
import animation from "../../../../public/lottie/ReportAnimation.json";

export default function ReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainAuthLayout animation={animation}>{children}</MainAuthLayout>;
}
