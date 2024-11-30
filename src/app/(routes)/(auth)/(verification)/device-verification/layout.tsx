import { MainAuthLayout } from "@/features/auth/components/AuthLayout";
import animation from "../../../../../../public/lottie/DeviceVerificationAnimation.json";

export default function DeviceVerificationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainAuthLayout animation={animation}>{children}</MainAuthLayout>;
}
