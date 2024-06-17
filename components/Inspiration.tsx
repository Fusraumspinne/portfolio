"use client"

import { HoverEffect } from "@/components/ui/Card-Hover-Effect";

export function CardHoverEffectDemo() {
    return (
        <div>
            <h1 className="heading">
                My Coding <span className="text-purple">Advices</span>
            </h1>

            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={projects} />
            </div>
        </div>
    );
}
export const projects = [
    {
        title: "Unity",
        description:
            "Unity is a very simple and powerful Game-Engine, with an big Asset Store and a lot of documentation, where you can easily start building your own games in C#.",
        link: "https://unity.com",
    },
    {
        title: "C#",
        description:
            "C# is not very easy. That's why there are a lot of tutorials for beginners. A very good Youtube-Channel is Brackeys he made a lot of simple videos about everthing you can do in Unity.",
        link: "https://www.youtube.com/@Brackeys",
    },
    {
        title: "Next.js",
        description:
            "If you want to get into Webdevelopment you should start with HTML, CSS and JS but if you want to make even more powerful applications you should use Next.js or another framework like me.",
        link: "https://nextjs.org",
    },
    {
        title: "Backend",
        description:
            "The backend is everything that happens behind the scenes, like a Database and an simple way to create your own Database is with MongoDB which is powerful and easy to understand.",
        link: "https://meta.com",
    },
    {
        title: "Framework",
        description:
            "If you wnat to make Websites like this portfolio you should use frameworks for CSS and JS like Next.js or Tailwind with that you can write CSS in an more powerful and easy way.",
        link: "https://tailwindcss.com",
    },
    {
        title: "Git",
        description:
            "Git is an programm for version controll, which is very important when it comes to work on larger projects or with a team. As an interface you can use Git-Hub where you have control over your repositories.",
        link: "https://github.com",
    },
];
