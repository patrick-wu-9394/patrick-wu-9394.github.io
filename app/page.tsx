import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />

      <main className="flex-grow p-4 text-blue-800 dark:text-red-400">
        This is my main
      </main>
    </SidebarProvider>
  );
}
