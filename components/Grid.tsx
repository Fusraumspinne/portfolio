"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import Image from "next/image";
import { GradientBackground } from "./GradientBackground";
import CodeRoundedIcon from '@mui/icons-material/CodeRounded';

export function Grid() {
  return (
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
  );
}

  const Skeleton = ({ id }: { id?: number | null }) => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
      {id === 4 ? (
        <div className="relative w-full h-full">
          <div className="absolute inset-0 z-10">
            <GradientBackground />
          </div>
          <div className="relative grid grid-cols-6 gap-4 p-4 z-20 justify-items-center items-center h-full w-full">
            <Image src={"/icons/HTML.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/CSS.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/JS.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/TS.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/React.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/NextJS.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/MongoDB.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/CSharp.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/Unity.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/Java.png"} alt={"Icon"} width={40} height={40} />
            <Image src={"/icons/Python.png"} alt={"Icon"} width={40} height={40} />
          </div>
        </div>
        ) : (
          <div></div>
        )}
    </div>
  );

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <CodeRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <CodeRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <CodeRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "My Techstacks",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <CodeRoundedIcon className="h-4 w-4 text-white" />,
  },
  {
    title: "My Techstacks",
    description:
      "HTML, CSS, JavaScript/Typescript, React, Next.js, MongoDB, C#, Unity, Python, Java",
    header: <Skeleton id={4} />,
    icon: <CodeRoundedIcon className="h-4 w-4 text-white" />,
  },
];
