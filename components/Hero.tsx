"use client";
import React from "react";
import { HeroParallax } from "@/components/ui/hero-parallax";

export function Hero() {
  return <HeroParallax products={products} />;
}
export const products = [
    {
        title: "Druglord's Legacy",
        thumbnail: "/images/DruglordsLegacy1.png",
    },
    {
        title: "Burger Shop",
        thumbnail: "/images/BurgerShop1.jpg",
    },
    {
        title: "Get of the Virus",
        thumbnail: "/images/GetOffTheVirus1.png",
    },
    {
        title: "Druglord's Legacy",
        thumbnail: "/images/DruglordsLegacy4.png",
    },
    {
        title: "Realtime Chat App",
        thumbnail: "/images/ChatApp1.png",
    },
    {
        title: "Chat App",
        thumbnail: "/images/ChatApp2.jpg",
    },
    {
        title: "Chat App",
        thumbnail: "/images/ChatApp3.png",
    },
    {
        title: "Druglord's Legacy",
        thumbnail: "/images/DruglordsLegacy2.png",
    },
    {
        title: "Space Shooter",
        thumbnail: "/images/SpaceShooter1.png",
    },
    {
        title: "Plantagen Manager",
        thumbnail: "/images/PlantagenManager1.png",
    },
    {
        title: "ToDo App",
        thumbnail: "/images/ToDoApp1.png",
    },
    {
        title: "Druglord's Legacy",
        thumbnail: "/images/DruglordsLegacy3.png",
    },
    {
        title: "Neural Network",
        thumbnail: "/images/AI1.png",
    },
    {
        title: "Shooter",
        thumbnail: "/images/Shooter1.png",
    },
    {
        title: "Wetter App",
        thumbnail: "/images/WetterApp1.png",
    },
];
