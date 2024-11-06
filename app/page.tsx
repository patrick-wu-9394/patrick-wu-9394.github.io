"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar, AppSideBarProps } from "@/components/app-sidebar";
import { Briefcase, GraduationCap, Home, Settings, User } from "lucide-react";
import * as info from "@/types/info";
import { useEffect, useState } from "react";

export default function Page() {
  const [infoData, setMyInfoData] = useState<info.Info>();
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
        setMyInfoData(data);
        console.log("response: ", data);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

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
      <main className="container flex grid-flow-row flex-col items-start text-purple-600 dark:text-red-400">
        <section>
        <h2 className="text-2xl font-bold">About</h2>
          <div>{infoData?.about}</div>
        </section>
        
        
        <section>
          <h2 className="text-2xl font-bold">Experience</h2>
          <ul className="mt-2 space-y-4">
            {infoData?.experience.length ? (
              infoData?.experience.map((exp, index) => (
                <li key={index} className="rounded-md border p-4">
                  <h3 className="text-xl font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gray-600">{exp.date}</p>
                  <p className="mt-1 font-medium">{exp.title}</p>
                  <p className="mt-2">{exp.description}</p>
                </li>
              ))
            ) : (
              <p>No experience data available</p>
            )}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold">Education</h2>
          <ul className="mt-2 space-y-4">
            {infoData?.education.length ? (
              infoData?.education.map((edu, index) => (
                <li key={index} className="rounded-md border p-4">
                  <h3 className="text-xl font-semibold">{edu.school}</h3>
                  <p className="mt-1">{edu.degree}</p>
                  <p className="mt-2">{edu.description}</p>
                </li>
              ))
            ) : (
              <p>No education data available</p>
            )}
          </ul>
        </section>
      </main>
    </SidebarProvider>
  );
}
