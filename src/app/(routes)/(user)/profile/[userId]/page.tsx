import { ProfilePageContent } from "@/features/user/profile/ProfilePageContent";

interface PageProps {
  params: Promise<{ userId: string }>;
}

export default async function ProfilePage({ params }: PageProps) {
  const { userId } = await params;

  return <ProfilePageContent userId={userId} />;
}
