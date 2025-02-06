import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExpandableCardDemo from "./expandable-card-demo-standard";

export function TimeLine() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div>
            <ExpandableCardDemo count={0}/>
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="text-white text-xs md:text-sm font-normal mb-8">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <div>
            <ExpandableCardDemo count={0}/>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div>
          <div>
            <ExpandableCardDemo count={0}/>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
