import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, AppSideBarProps } from "@/components/app-sidebar";
import { Briefcase, GraduationCap, Home, Settings, User } from "lucide-react";

export default function Page() {
  // Menu items.
  const items: AppSideBarProps[] = [
    {
      title: "Home",
      id: "home",
      icon: Home,
    },
    {
      title: "About",
      id: "about",
      icon: User,
    },
    {
      title: "Experience",
      id: "experience",
      icon: Briefcase,
    },
    {
      title: "Education",
      id: "education",
      icon: GraduationCap,
    },
    {
      title: "Settings",
      id: "settings",
      icon: Settings,
    },
  ];

  return (
    <SidebarProvider>
      <AppSidebar contentProps={items} label="Navigation" />
      <SidebarTrigger />

      <main className="flex-grow p-4 text-blue-800 dark:text-red-400">
        This is my main
      </main>
    </SidebarProvider>
  );
}
