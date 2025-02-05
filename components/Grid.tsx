"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

type IconType = { src: string; alt: string };

const icons: IconType[] = [
  { src: "/icons/CSS.png", alt: "Icon" },
  { src: "/icons/CSharp.png", alt: "Icon" },
  { src: "/icons/HTML.png", alt: "Icon" },
  { src: "/icons/Java.png", alt: "Icon" },
  { src: "/icons/JS.png", alt: "Icon" },
  { src: "/icons/MongoDB.png", alt: "Icon" },
  { src: "/icons/NextJS.png", alt: "Icon" },
  { src: "/icons/Python.png", alt: "Icon" },
  { src: "/icons/React.png", alt: "Icon" },
  { src: "/icons/TS.png", alt: "Icon" },
  { src: "/icons/Unity.png", alt: "Icon" },
];

const ICON_SIZE = 40;

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

const Skeleton = ({ id }: { id?: number | null }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [positions, setPositions] = useState<Array<{ top: string; left: string }>>([]);
  
    // Funktion zum Prüfen, ob zwei Rechtecke kollidieren
    const isColliding = (
      rect1: { x: number; y: number; w: number; h: number },
      rect2: { x: number; y: number; w: number; h: number }
    ) => {
      return (
        rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y
      );
    };
  
    useEffect(() => {
      if (id === 4 && containerRef.current) {
        const container = containerRef.current;
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;
  
        const newPositions: Array<{ top: string; left: string }> = [];
        const placedRects: Array<{ x: number; y: number; w: number; h: number }> = [];
  
        // Für jedes Icon eine Position finden
        icons.forEach(() => {
          let attempts = 0;
          const maxAttempts = 100;
          let posFound = false;
          let x = 0;
          let y = 0;
  
          while (!posFound && attempts < maxAttempts) {
            // Generiere zufällige Koordinaten, sodass das Icon komplett in den Container passt
            x = Math.random() * (containerWidth - ICON_SIZE);
            y = Math.random() * (containerHeight - ICON_SIZE);
            const newRect = { x, y, w: ICON_SIZE, h: ICON_SIZE };
  
            // Prüfe Kollision mit bereits platzierten Icons
            const collision = placedRects.some((rect) => isColliding(rect, newRect));
  
            if (!collision) {
              placedRects.push(newRect);
              posFound = true;
            }
            attempts++;
          }
  
          // Falls keine collisionfreie Position gefunden wurde, benutze die letzte
          const leftPercent = (x / containerWidth) * 100;
          const topPercent = (y / containerHeight) * 100;
          newPositions.push({ left: `${leftPercent}%`, top: `${topPercent}%` });
        });
  
        setPositions(newPositions);
      }
    }, [id]);
  
    return (
      <div
        className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl 
                   bg-gradient-to-br from-neutral-200 dark:from-neutral-900 
                   dark:to-neutral-800 to-neutral-100 p-2"
        ref={containerRef}
      >
        {id === 4 ? (
          <div className="relative w-full h-full">
            {icons.map((icon, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: positions[index]?.top,
                  left: positions[index]?.left,
                }}
              >
                <Image src={icon.src} alt={icon.alt} width={ICON_SIZE} height={ICON_SIZE} />
              </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    );
  };
  
  export default Skeleton;

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Techstacks",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "My Techstacks",
    description:
      "HTML, CSS, JavaScript/Typescript, React, Next.js, MongoDB, C#, Unity, Python, Java",
    header: <Skeleton id={4} />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];
