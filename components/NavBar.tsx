"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';

export function NavBar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <HomeRoundedIcon className="h-4 w-4 text-white" />,
    },
    {
        name: "About",
        link: "#about",
        icon: <PersonRoundedIcon className="h-4 w-4 text-white" />,
      },
    {
      name: "Timeline",
      link: "#timeline",
      icon: <TimelineRoundedIcon className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
