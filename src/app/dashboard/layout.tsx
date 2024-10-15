import UnactivatedUserPage from "@/components/dashboard/unactivated-page";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Sidebar from "@/components/sidebar";
import { api } from "@/trpc/server";

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const user = await api.user.getUser();

  const isActivated = user?.activated ?? false;

  if (!isActivated) {
    return (
      <div>
        <UnactivatedUserPage />
      </div>
    );
  }
  return (
    <MaxWidthWrapper>
      <div className="flex h-screen w-full">
        <Sidebar />
        {children}
      </div>
    </MaxWidthWrapper>
  );
}