"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, AppSideBarProps } from "@/components/app-sidebar";
import { Briefcase, GraduationCap, Home, Settings, User } from "lucide-react";
import * as info from "@/lib/info";

import { useEffect, useState } from "react";

export default function Page() {
  const [myInfo, setMyInfo] = useState<info.Info | null>(null);
  useEffect(() => {
    // Fetch JSON data from the public folder
    fetch("/info.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: info.Info) => {
        setMyInfo(data);
        console.log("response: ", data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  useEffect(() => {
    console.log("debug:", myInfo);
  }, [myInfo]);

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
      <main className="container flex grid-flow-row flex-col items-center justify-center text-purple-600 dark:text-red-400">
        <div className="row-start-1">Hello</div>
        <div className="row-start-2">World </div>
      </main>
    </SidebarProvider>
  );
}
