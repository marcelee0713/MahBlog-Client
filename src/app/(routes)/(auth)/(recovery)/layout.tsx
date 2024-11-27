import { MainAuthLayout } from "@/features/auth/components/AuthLayout";
import animation from "../../../../../public/lottie/RecoveryPageAnimation.json";

export default function RecoveryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainAuthLayout animation={animation}>{children}</MainAuthLayout>;
}
