export const METADATA = {
  author: "Shubh Porwal",
  title: "Portfolio | Yadira",
  description:
    "Yadira Salazar is a Web Developer from Saltillo, interested in crafting beautiful and functional applications.",
  siteUrl: "https://www.shubhporwal.me/",
  twitterHandle: "",
  keywords: [
    "Yadira Salazar",
    "Web Developer",
    "Web Developer",
    "React Native Developer",
    "Software Developer",
    "Software Engineer",
    "Portfolio",
    "Devfolio",
    "Folio",
  ].join(", "),
  image:
    "https://res.cloudinary.com/dywdhyojt/image/upload/v1690572126/preview.png",
  language: "English",
};

export const MENULINKS = [
  {
    name: "Home",
    ref: "home",
  },
  {
    name: "Skills",
    ref: "skills",
  },
  {
    name: "Projects",
    ref: "projects",
  },
  {
    name: "Work",
    ref: "work",
  },
  {
    name: "Contact",
    ref: "contact",
  },
];

export const TYPED_STRINGS = [
  "An Enthusiastic Junior Web Developer",
  "Really love Front End 💖",
  "For a better world without 404's",
];

export const SOCIAL_LINKS = [
  {
    name: "mail",
    url: "mail: yadirasalazar.ysa@gmail.com",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/yadira-sa/",
  },
  {
    name: "github",
    url: "https://github.com/yadiraSa",
  },
  {
    name: "instagram",
    url: "",
  },
  {
    name: "twitter",
    url: "",
  },
];

export const SKILLS = {
  languagesAndTools: [
    "html",
    "css",
    "javascript",
    "typescript",
    "nodejs",
    // "sass",
    // "cpp",
    // "java",
    // "python",
    // "webpack",
    // "vite",
    "firebase",
    // "moralis",
    "stripe",
    "figma",
    // "tanstack-query",
  ],
  librariesAndFrameworks: [
    "react",
    // "redux",
    "nextjs",
    "tailwindcss",
    "styledcomponents",
    "antdesign",
    "nest"
    // "materialui"
    // "chakra-ui",
  ],
  databases: ["mysql", "mongodb"],
  other: ["git", "github", "gitlab", "trello", "jira"],
};

export const PROJECTS = [
  // {
  //   name: "Shotime",
  //   image: "",
  //   blurImage: "",
  //   description:
  //     "Developed with complete E-commerce functionality and User Authentication 🛍️",
  //   gradient: ["#FFCF1B", "#FF881B"],
  //   url: "https://shubh73-shotime.vercel.app/",
  //   tech: ["react", "tailwindcss", "redux", "mongodb", "stripe"],
  // },
  {
    name: "Scala4",
    image: "/projects/scala4.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description: "Golf reservation in Spain using ReactJs + NodeJs 🏌🏼",
    gradient: ["#2D7915", "#DC2537"],
    // url: "https://elparaisoeventreg.scala4.com/",
    tech: ["react", "nodejs"],
  },
  {
    name: "El alfarero multimédica",
    image: "/projects/alfarero.png",
    blurImage: "/projects/blur/medium-blur.webp",
    description: "El alfarero using ReactJs + AntDesing + Firebase Real time 🏥",
    gradient: ["#421579", "#EA4D2C"],
    // url: "https://shubh73-medium.vercel.app/",
    tech: ["react", "antdesign", "firebase"],
  },
  {
    name: "AI-SaaS",
    image: "/projects/ai-saas.png",
    blurImage: "/projects/blur/airbnb-blur.webp",
    description:
      "AI SaaS plataform using NextJs + TailwindCSS + Stripe + Clerk + Crisp + Prisma",
    gradient: ["#000066", "#6699FF"],
    tech: ["nextjs", "tailwindcss", "stripe"],
  },
];

export const WORK = [
  {
    id: 1,
    company: "ClickIT",
    title: "Web Developer Jr",
    location: "Saltillo, Coahuila",
    range: "June 2022 - September 2023",
    responsibilities: [
      "Participed with various clients around the world",
      "Created and maintained web sites",
      "Fixed bugs and collaborated with testing team",
    ],
    // url: "https://mydukaan.io/",
    // video: "/work/dukaan.mp4",
  },
  // {
  //   id: 2,
  //   company: "Aviate",
  //   title: "Frontend Developer Intern",
  //   location: "Goa",
  //   range: "May - October 2022",
  //   responsibilities: [
  //     "Built their flagship product Q-Rate, a voice-based applicant screening platform.",
  //     "Developed pixel-perfect responsive web applications achieving daily traffic of 1000-2000 users.",
  //     "Successfully rolled out an error-logging and bug reporting system that cut user-reported bugs by 30%.",
  //   ],
  //   url: "https://www.aviate.jobs/",
  //   video: "/work/aviate.mp4",
  // },
  // {
  //   id: 3,
  //   company: "Spacenos",
  //   title: "Web Developer Intern",
  //   location: "Bangalore, Karnataka",
  //   range: "September - December 2021",
  //   responsibilities: [
  //     "Led the Full Stack revamp on the Admin Portal.",
  //     "Developed app integration with REST APIs, Google Maps, User Auth, Stripe and other libraries.",
  //     "Implemented CRUD features for all the services and providers.",
  //   ],
  //   url: "https://spacenos.com/",
  //   video: "/work/spacenos.mp4",
  // },
];

export const GTAG = "G-5HCTL2TJ5W";
