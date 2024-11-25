import { MainAuthLayout } from "@/features/auth/components/AuthLayout";
import animation from "../../../../public/lottie/SignInPageAnimation.json";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainAuthLayout animation={animation}>{children}</MainAuthLayout>;
}
