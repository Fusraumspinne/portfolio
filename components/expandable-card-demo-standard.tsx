"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo({ count }: { count: number }) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden"; 
      document.body.style.paddingRight = `${scrollbarWidth}px`; 
    } else {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref as React.RefObject<HTMLDivElement>, () => setActive(null));

  const cardToShow = cards[count] || null;

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col border-white/[0.2] border rounded-xl bg-slate-950 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-white"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className={`px-4 py-3 text-sm rounded-full font-bold ${active.ctaLink == "" ? "bg-slate-950 text-slate-950" : " bg-white hover:bg-blue-500 hover:text-white text-black"}`}
                  >
                    View on GitHub
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto[mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className={`max-w-2xl mx-auto w-full gap-4 transition-all rounded-xl border-white/[0.2]${active ? "" : " border"}`}>
        {cardToShow && (
          <motion.div
            layoutId={`card-${cardToShow.title}-${id}`}
            key={`card-${cardToShow.title}-${id}`}
            onClick={() => setActive(cardToShow)}
            className="p-4 flex flex-col md:flex-row justify-between items-center rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row">
              <motion.div layoutId={`image-${cardToShow.title}-${id}`}>
                <Image
                  width={1000}
                  height={1000}
                  src={cardToShow.src}
                  alt={cardToShow.title}
                  className="h-40 w-40 md:h-14 md:w-14 object-cover object-top rounded-xl border-white/[0.2] border"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${cardToShow.title}-${id}`}
                  className="font-medium text-white text-center md:text-left"
                >
                  {cardToShow.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${cardToShow.description}-${id}`}
                  className="text-white text-center md:text-left"
                >
                  {cardToShow.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${cardToShow.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-white hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {cardToShow.ctaText}
            </motion.button>
          </motion.div>
        )}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "Personal portfolio",
    title: "Portfolio",
    src: "/images/Portfolio1.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/portfolio",
    content: () => {
      return (
        <p>
          My personal portfolio made with AceternityUI and Next.js just to show off what I have made so far. This project showcases my skills in modern web development technologies and design principles. It includes various sections such as my projects, skills, and contact information, providing a comprehensive overview of my work and capabilities.
        </p>
      );
    },
  },
  {
    description: "First big game",
    title: "Druglord's Legacy",
    src: "/images/DruglordsLegacy2.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/druglord-s-legacy",
    content: () => {
      return (
        <p>
          On this game, I worked for around 6 months. It was my biggest game, and I played it for around 80 hours to max out. I published it for free and managed a Discord server with some players. I also provided my own website for it.
        </p>
      );
    },
  },
  {
    description: "Own neural network",
    title: "AI-Project",
    src: "/images/AI1.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/dodgeball-ai",
    content: () => {
      return (
        <p>
          I made an AI project where I wrote my own neural network. It was fascinating to see the network improving over time, but I eventually stopped working on it because it became quite frustrating. Despite the challenges, this project was a valuable learning experience that deepened my understanding of machine learning and neural networks.
        </p>
      );
    },
  },
  {
    description: "Websocket chat app",
    title: "Chat-App",
    src: "/images/ChatApp1.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/websocket-chatapp",
    content: () => {
      return (
        <p>
          A chat app with WebSockets and MongoDB. I also made two YouTube tutorials about it. It was a really cool project to learn about real-time communication and database integration. This project helped me understand the intricacies of WebSocket connections, handling real-time data, and working with MongoDB for efficient data storage and retrieval. It was a valuable learning experience that enhanced my skills in building interactive and dynamic web applications.
        </p>
      );
    },
  },
  {
    description: "Another Next.js project",
    title: "Online-Shop",
    src: "/images/OnlineShop1.jpg",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/advanced-online-shop",
    content: () => {
      return (
        <p>
          An online shop which I never finished but was a cool project to learn components in Next.js. This project helped me understand the fundamentals of building e-commerce platforms, including product listings, shopping carts, and user authentication. Although it remains incomplete, it was a valuable learning experience that improved my skills in Next.js and component-based architecture.
        </p>
      );
    },
  },
  {
    description: "Chat app with MongoDB",
    title: "Flopper-Chat App",
    src: "/images/ChatApp3.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/flopper-chat",
    content: () => {
      return (
        <p>
          A newer chat app made with MongoDB, this time completely developed by myself with lots of features like group chats and file upload. This project showcases my ability to work with modern databases and implement advanced functionalities in a web application. It was a significant step forward in my development skills, allowing me to create a more robust and user-friendly chat application.
        </p>
      );
    },
  },
  {
    description: "First Next.js project",
    title: "Burger-Shop",
    src: "/images/BurgerShop1.jpg",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/online-shop",
    content: () => {
      return (
        <p>
          During my internship, I made an online shop for burgers with Next.js and MongoDB. This project involved creating a full-stack application with a focus on user experience and performance. The online shop features a dynamic menu, user authentication, and a shopping cart system. It was a great opportunity to apply my skills in modern web development and learn more about integrating frontend and backend technologies.
        </p>
      );
    },
  },
  {
    description: "Reworked version",
    title: "Plantagen-Manager 2",
    src: "/images/PlantagenManager1.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/Plantagen-Manager-2",
    content: () => {
      return (
        <p>
          A reworked version of Plantagen Manager 1 with new products and some more features. This version includes enhanced graphics, additional levels, and improved gameplay mechanics. Players can now explore new territories, manage a wider variety of resources, and face more challenging scenarios. The updates aim to provide a more immersive and engaging experience for players, building on the foundation of the original game.
        </p>
      );
    },
  },
  {
    description: "My first chat app with PHP",
    title: "Flopper-Chat",
    src: "/images/ChatApp2.jpg",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/chatapp-php",
    content: () => {
      return (
        <p>
          My first project with a database using MySQL. I created this chat app with PHP, and it was really helpful during tests in school. This project taught me the basics of backend development, database management, and how to integrate a frontend with a backend. It was a valuable learning experience that laid the foundation for more complex projects in the future.
        </p>
      );
    },
  },
  {
    description: "Website to manage school stuff",
    title: "School-Manager",
    src: "/images/WetterApp1.png",
    ctaText: "Expand",
    ctaLink: "",
    content: () => {
      return (
        <p>
          A website with a to-do list, weather app, calculator, gambling, and mini-games - everything you need for school. This project was designed to be a comprehensive tool for students, providing various functionalities to help manage their tasks, stay updated with the weather, perform calculations, and have some fun with mini-games during breaks. It showcases my ability to integrate multiple features into a single application, enhancing user experience and utility.
        </p>
      );
    },
  },
  {
    description: "Another Game",
    title: "Tactical-Shooter",
    src: "/images/Shooter1.png",
    ctaText: "Expand",
    ctaLink: "",
    content: () => {
      return (
        <p>
          This was my first and my last shooter. I made it with lots of features, but I am not good with animations, so I just make strategy games now. The game included various weapons, enemy types, and levels, providing an engaging experience for players. Despite the challenges with animations, this project was a valuable learning experience and helped me understand the complexities of game development.
        </p>
      );
    },
  },
  {
    description: "First JS project",
    title: "ToDo-List",
    src: "/images/ToDoList1.png",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/GoofyCheckliste",
    content: () => {
      return (
        <p>
          This was my first project with JavaScript, a simple to-do list which saves tasks in the browser storage. It was a great introduction to JavaScript and helped me understand how to manipulate the DOM, handle events, and work with local storage. This project laid the foundation for more advanced JavaScript applications and improved my problem-solving skills.
        </p>
      );
    },
  },
  {
    description: "First website",
    title: "HTML-Website",
    src: "/images/HTMLWebsite1.jpg",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/HTMLTags",
    content: () => {
      return (
        <p>
          This was my first website made with HTML, nothing special. It was a simple static website that showcased my initial understanding of HTML and CSS. This project was a stepping stone in my web development journey, helping me grasp the basics of web design and layout. It laid the foundation for more complex projects in the future.
        </p>
      );
    },
  },
  {
    description: "First bigger game",
    title: "Plantagen-Manager 1",
    src: "/images/PlantagenManager1.png",
    ctaText: "Expand",
    ctaLink: "",
    content: () => {
      return (
        <p>
          I love tycoon games and in this game, I tried to make one on my own. In this game, you try to become the druglord by managing resources, expanding your territory, and overcoming various challenges. It was an exciting project that allowed me to explore game mechanics, resource management, and strategic planning. This project was a great learning experience and helped me improve my skills in game development.
        </p>
      );
    },
  },
  {
    description: "First game made by my own",
    title: "Get off the Virus",
    src: "/images/GetOffTheVirus1.png",
    ctaText: "Expand",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Get off the Virus is a zombie shooter game that I made completely by myself. It was my first real project and involved a lot of learning and experimentation. The game features various levels, different types of enemies, and a range of weapons for the player to use. This project helped me understand the fundamentals of game development, including level design, character movement, and game mechanics. It was a challenging but rewarding experience that laid the groundwork for my future projects.
        </p>
      );
    },
  },
  {
    description: "First Game",
    title: "Spaceshooter",
    src: "/images/SpaceShooter1.png",
    ctaText: "Expand",
    ctaLink: "",
    content: () => {
      return (
        <p>
          Spaceshooter made with a tutorial and expanded by myself, first Unity project. This game was a significant milestone in my journey as a game developer. It involved learning the basics of Unity, understanding game mechanics, and implementing features such as player controls, enemy AI, and scoring systems. The project helped me develop a strong foundation in game development and sparked my interest in creating more complex and engaging games in the future.
        </p>
      );
    },
  },
  {
    description: "Powered by my own ai",
    title: "Self-driving car",
    src: "/images/SelfDrivingCar.jpg",
    ctaText: "Expand",
    ctaLink: "https://github.com/Fusraumspinne/Selbstfahrendes_Auto",
    content: () => {
      return (
        <p>
          This self-driving car project uses a neural network I developed myself to navigate autonomously. Built with a Raspberry Pi and sensors, the car detects obstacles and adjusts its direction in real time. I trained the AI using custom data and implemented logic for movement, steering, and safety. It was a hands-on way to apply machine learning and electronics, combining both software and hardware into a working prototype. This project marks a major step in my journey toward AI-driven robotics.
        </p>
      );
    },
  },
];
