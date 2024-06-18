export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#workExperience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I'm working remote, flexible and effective for my clients",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with communication around the world",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building this Portfolio with Next.js",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Online Chat-Application",
      des: "Explore my Chat-Application build with Next.JS and MongoDB for an real time communication.",
      img: "/chatapp.png",
      iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/mongodb_logo.png"],
      link: "https://github.com/Fusraumspinne/flopper-chat",
    },
    {
      id: 2,
      title: "Online Shop for Burgers",
      des: "A simple online-shop for different kinds of burgers.",
      img: "/onlineShop.png",
      iconLists: ["/next.svg", "/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/mongodb_logo.png"],
      link: "https://github.com/Fusraumspinne/online-shop",
    },
    {
      id: 3,
      title: "Open-World Game",
      des: "A opne-world game where you are a criminal, who tries to get rich by planting and selling drugs.",
      img: "/openWorldGame.png",
      iconLists: ["/logo_csharp.png", "/vs_logo.png", "/unity_logo.png"],
      link: "https://github.com/Fusraumspinne/Frankfurt",
    },
    {
      id: 4,
      title: "First-Person-Shooter",
      des: "A interactive shooter game with a lot of actions and cool and unique abilities.",
      img: "/FPSShooter.png",
      iconLists: ["/logo_csharp.png", "/vs_logo.png", "/unity_logo.png"],
      link: "https://github.com/Fusraumspinne/FPS",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Playing Marvin's game was an absolute blast. The attention to detail, engaging gameplay, and innovative features made it an unforgettable experience. If you're looking for top-notch entertainment, Adrian's games are a must-play!",
      name: "Tathan",
      title: "Professionel Valorant Player",
      img: "/valoPro.jpeg"
    },
    {
      quote:
        "Marvin's chat app is a game-changer. The seamless interface, robust features, and user-friendly design make it the best chat app I've ever used. Communication has never been easier or more enjoyable!",
      name: "Mr. Gaming",
      title: "Child molester",
      img: "/child.jpg"
    },
    {
      quote:
        "I was amazed by Marvin's game development skills. The graphics, story, and gameplay mechanics are top-tier. Every aspect of the game shows Marvin's dedication and passion for creating exceptional gaming experiences.",
      name: "Hammerhai",
      title: "Pirate voter",
      img: "/pirate.jpg"
    },
    {
      quote:
        "Marvin's chat app is phenomenal. It's intuitive, reliable, and packed with great features that enhance every conversation. It's clear that a lot of thought and effort went into making it this good.",
      name: "Pawel",
      title: "Small",
      img: "/small.jpg"
    },
    {
      quote:
        "Marvin's games are incredible. The creativity, challenge, and fun they offer are unparalleled. Each game is a testament to his skill and imagination. Highly recommend playing them!",
      name: "Hentai Master",
      title: "Hentai dependent",
      img: "/hentaiMaster.jpg"
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Fullstack Webdeveloper",
      desc: "Experiences in Frontend- and Backenddevelopment by creating diffrent Websites.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Database Manager",
      desc: "Own diffrent Databases like some MongoDB's or one SQL Database.",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Freelance Web- and Gamedeveloper",
      desc: "Making diffrent Projects every Month, to learn more about programming.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Unity Developer",
      desc: "Gamedevelopment in Unity, one of the most used Engine in the World.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];