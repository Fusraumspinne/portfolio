import React from "react";
import { Timeline } from "@/components/ui/timeline";
import ExpandableCardDemo from "./expandable-card-demo-standard";

export function TimeLine() {
  const data = [
    {
      title: "2025",
      content: (
        <div className="md:mt-36">
          <div className="mb-4">
            <ExpandableCardDemo count={17}/>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={16}/>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={0}/>
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div className="md:mt-36">
          <div className="mb-4">
            <ExpandableCardDemo count={1}/>
            <div className="border-white/[0.2] border mt-4"></div>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={2}/>
            <div className="border-white/[0.2] border mt-4"></div>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={3}/>
            <div className="border-white/[0.2] border mt-4"></div>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={4}/>
            <div className="border-white/[0.2] border mt-4"></div>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={5}/>
            <div className="border-white/[0.2] border mt-4"></div>
          </div>
          <div className="mb-4">
            <ExpandableCardDemo count={6}/>
            <div className="border-white/[0.2] border mt-4"></div>
          </div>
          <div className="mb-4">
              <div className="border-white/[0.2] border rounded-xl text-white p-4">
                <h2 className="font-medium">Internship</h2>
                <p>I had to do a 2 week internship for school and I choosed a software start-up where I learned Next.js and TS</p>
              </div>
            </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div className="md:mt-36">
          <div>
            <div className="mb-4">
              <ExpandableCardDemo count={7}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={8}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={9}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={10}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={11}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={12}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <div className="border-white/[0.2] border rounded-xl text-white p-4">
                <h2 className="font-medium">Another Language</h2>
                <p>After around 3/4 year and some projects later I wanted to do something else and learned HTML and CSS and later also Javascript</p>
              </div>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={13}/>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2022",
      content: (
        <div className="md:mt-36">
          <div>
            <div className="mb-4">
              <ExpandableCardDemo count={14}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <ExpandableCardDemo count={15}/>
              <div className="border-white/[0.2] border mt-4"></div>
            </div>
            <div className="mb-4">
              <div className="border-white/[0.2] border rounded-xl text-white p-4">
                <h2 className="font-medium">Started coding</h2>
                <p>I got my laptop with 13 and at the same time we used Scratch in school which got me the idea of creating my own games with C# and Unity</p>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full mb-44">
      <Timeline data={data} />
    </div>
  );
}
