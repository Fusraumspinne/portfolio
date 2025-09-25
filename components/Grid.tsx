"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { GradientBackground } from "./GradientBackground";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import LaptopRoundedIcon from '@mui/icons-material/LaptopRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import BugReportRoundedIcon from '@mui/icons-material/BugReportRounded';

export function Grid() {
  return (
    <div>
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 px-4 md:px-8 lg:px-10 flex justify-center">
        <h2 className="text-lg md:text-4xl text-white max-w-4xl">
          About <span className="text-purple-300">Me</span>
        </h2>
      </div>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              i === 0
                ? "md:col-span-2 md:row-span-2"
                : i === 4
                ? "md:col-span-2"
                : ""
            }
          />
        ))}
      </BentoGrid>
    </div>
  );
}

  const Skeleton = ({ id }: { id?: number | null }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br border-white/[0.2] border">
      {id === 4 ? (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 z-10">
            <GradientBackground />
          </div>
            <div className="relative grid grid-cols-6 gap-4 p-4 z-20 justify-items-center items-center h-full w-full">
            <Image src={"/icons/HTML.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/CSS.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/JS.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/TS.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/React.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/NextJS.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/MongoDB.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/CSharp.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/Unity.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/Java.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/Python.png"} alt={"Icon"} width={35} height={35} />
            <Image src={"/icons/GitHub.png"} alt={"Icon"} width={35} height={35} />
            </div>
        </div>
        ) : (
          <div></div>
        )}

    {id === 2 ? (
      <div className=" overflow-hidden w-full relative">
      <Image src={"/grid.svg"} alt={"Icon"} width={1000} height={1000}  className="h-full w-full absolute"/>
      <Image src={"/b4.svg"} alt={"Icon"} width={1000} height={1000}  className="h-full w-full ms-[2rem] mt-[3rem]"/>
    </div>
    ) : (
      <div></div>
    )}

    {id === 3 ? (
      <div className="w-full h-full">
        <Image src={"/images/Reyna.jpg"} alt={"Icon"} width={1000} height={1000} className="h-full w-full rounded-xl"/>
      </div>
    ) : (
      <div></div>
    )}

    {id === 5 ? (
      <div className=" overflow-hidden w-full relative">
        <Image src={"/grid.svg"} alt={"Icon"} width={1000} height={1000}  className="h-full w-full absolute"/>
        <Image src={"/b5.svg"} alt={"Icon"} width={1000} height={1000}  className="h-full w-full ms-[0.5rem] mt-[0.3rem]"/>
      </div>
    ) : (
      <div></div>
    )}

    {id === 1 ? (
      <div className="h-full w-full relative">
        <Image src={"/images/Projects.png"} alt={"Icon"} width={1000} height={1000}  className="h-full w-full rounded-xl"/>
      </div>
    ) : (
      <div></div>
    )}

    </div>
  );

const items = [
  {
    title: "My favorite projects",
    description: "From this portfolio, my first big game to online-shops and chat-apps",
    header: <Skeleton id={1}/>,
    icon: <ChecklistRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "Current project",
    description: "I am working on a Mafia Game and a reworked version of my AI in Python",
    header: <Skeleton id={2} />,
    icon: <AccountTreeRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "Mental problems",
    description: "Valorant",
    header: <Skeleton id={3} />,
    icon: <BugReportRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "Tech enthusiast",
    description: " with a passion for developing",
    header: <Skeleton id={5} />,
    icon: <LaptopRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "My Techstacks",
    description:
      "HTML, CSS, JavaScript/Typescript, React, Next.js, MongoDB, C#, Unity, Python, Java",
    header: <Skeleton id={4} />,
    icon: <CodeRoundedIcon className="h-4 w-4 text-white" />,
  },
];