import { Icons } from "@/components/icons";
import { Education, Experience, SideProject, SkillCategory } from "@/types";
import {
  Home,
  User,
  Code,
  Rocket,
  Mail,
  Database,
  Server,
  Globe,
  Cloud,
  Braces,
  GitBranch,
} from "lucide-react";

export const sections = {
  home: {
    title: "Home",
    id: "home",
    href: "#",
    icon: Home,
  },
  about: {
    title: "About",
    id: "about",
    href: "#about",
    icon: User,
  },
  skills: {
    title: "Skills",
    id: "skills",
    href: "#skills",
    icon: Code,
  },
  projects: {
    title: "Projects",
    id: "projects",
    href: "#projects",
    icon: Rocket,
  },
  contact: {
    title: "Contact",
    id: "contact",
    href: "#contact",
    icon: Mail,
  },
};

const name = "Sergii";
const legalName = "Sergii Petrychenko";
export const titleOfSite = `${name}'s Lab`;
export const titleTemplateOfSite = `%s • ${titleOfSite}`;

const email = "laos20823@gmail.com";
const phone = "+1 (779) 396 0015";
export const personalInfo = {
  name,
  fullname: legalName,
  location: "Slovakia",
  email,
  languages: ["English", "slovak"],
  phone,
  titles: ["Senior Full Stack Developer", "AI Developer", "Software Engineer", "E-commerce Specialist", "Blockchain Developer"],
  summary: `Tech Enthusiast specializing in building exceptional digital experiences`,
  introductions: [
    "I design and develop intuitive web applications that enhance user experiences, and I genuinely love what I do. With over 8 years of experience in full-stack development, I'm passionate about transforming ideas into reality through elegant interfaces and efficient, robust code.",
  ],
};

export const socialLinks = {
  gitHub: "https://github.com/firewindy930",
  linkedIn: "#",
  email: `mailto:${email}`,
  resume: `https://drive.google.com/file/d/1IgEbxRShD3kS6BpoDeW0_640wcqtncat/view?usp=sharing`,
  phone: `tel:+${phone.replace(/\D/g, "")}`,
};

export const whoIAm = [
  "I am Sergii Petrychenko, Senior Full Stack Developer with experience building and maintaining web applications from front end to back end, where I focus on developing applications using Next.js and NestJS. My work enhances user access to critical trading data, and I design robust database schemas with PostgreSQL while implementing scalable solutions on AWS for high performance and reliability.",
  "With a degree in Conputer Engineering from The Slovak University of Technology, I bring strong analytical skills to my projects. As an AWS Certified Solutions Architect, I am committed to driving innovation and improving user experiences in collaborative environments.",
  "In my free time, I enjoy exploring new technologies and working on side projects that fuel my creativity. I'm particularly focused on honing my coding skills in data structures and algorithms, which keeps me engaged and helps me discover innovative solutions for my professional work.",
];

export const experiences: Experience[] = [
  {
    title: "Junior Software Developer",
    company: "Forex Forest Limited",
    period: "Jun 2023 - Oct 2025",
    descriptions: [
      "Developed and scaled high-traffic web applications serving millions of active users using React, Next.js, Vue.js, and Node.js.",
      "Designed and optimized high-performance RESTful APIs with Node.js and Express, ensuring low latency, high security, and reliable concurrency.",
      "Implemented Redis-based caching and real-time data systems to significantly improve application responsiveness and reduce backend load.",
      "Adopted microservices architecture and cloud-native deployments (AWS/GCP) with automated CI/CD pipelines to enhance scalability and system reliability.",
      "Leveraged Next.js Server-Side Rendering (SSR) and global CDN integration to boost SEO, accelerate content delivery, and improve initial page performance.",
      "Delivered measurable performance gains, reducing average page load times by 35%, API latency by 40%, and driving higher user engagement across the platform.",
    ],
  },
];

export const educations: Education[] = [
  {
    degree: "Bachelor of Degree in Computer Engineering",
    institution: "Slovak University of Technology",
    period: "Sep 2014 - Jun 2017",
    descriptions: [
      "Learned the fundamentals of mathematics and Programming, information engineering, including data structures, algorithms, and software engineering principles."
    ],
  },
];

export const skillIcons = [
  Icons.nextJs,
  Icons.reactJs,
  Icons.tailwindCss,
  Icons.typeScript,
  Icons.nodeJs,
  Icons.expressJs,
  Icons.postgreSql,
  Icons.docker,
  Icons.git,
  Icons.jest,
  Icons.python,
  Icons.javaScript,
  Icons.html5,
  Icons.css,
  Icons.nestJs,
  Icons.terraform,
  Icons.postman,
  Icons.aws,
  Icons.shadcnUi,
  Icons.mySql,
  Icons.reactQuery,
  Icons.redux,
  Icons.githubActions,
  Icons.mui,
  Icons.vite,
  Icons.turborepo,
  Icons.langChain,
  Icons.langGraph,
  Icons.fastApi,
  Icons.redis,
  Icons.java,
  Icons.springBoot,
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages & Frameworks",
    icon: Braces,
    skills: [
      { name: "Python", level: "advanced" },
      { name: "TypeScript", level: "advanced" },
      { name: "JavaScript", level: "advanced" },
      { name: "PHP", level: "advanced" },
      { name: "LangChain", level: "intermediate" },
      { name: "C#", level: "intermediate" },
      { name: "Java", level: "beginner" },
    ],
  },
  {
    title: "Frontend Development",
    icon: Globe,
    skills: [
      { name: "Next.js", level: "advanced" },
      { name: "React", level: "advanced" },
      { name: "Laravel", level: "advanced" },
      { name: "AngularJS", level: "advanced" },
      { name: "Tailwind CSS", level: "advanced" },
      { name: "Framer Motion", level: "advanced" },
      { name: "HTML", level: "advanced" },
      { name: "CSS", level: "advanced" },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "NestJS", level: "advanced" },
      { name: "Django", level: "advanced" },
      { name: "Express.js", level: "advanced" },
      { name: "Laravel ", level: "advanced" },
      { name: "FastAPI", level: "intermediate" },
      { name: "Spring Boot", level: "intermediate" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "MySQL", level: "advanced" },
      { name: "Redis", level: "intermediate" },
      { name: "SQLite", level: "intermediate" },
    ],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: [
      { name: "Git", level: "advanced" },
      { name: "Docker", level: "advanced" },
      { name: "Terraform", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
      { name: "GitHub Actions", level: "intermediate" },
      { name: "Jest", level: "intermediate" },
    ],
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    skills: [
      { name: "AWS", level: "advanced" },
      { name: "Azure", level: "intermediate" },
    ],
  },
];

export const projects: SideProject[] = [
  {
    id: "1",
    title: "Summarize",
    description: `An intelligent research article assistant using Retrieval-Augmented Generation (RAG) to summarize and extract key insights from academic papers and documents with high contextual accuracy.`,
    image: "/summarize.png",
    demoUrl: "https://summarize.paullam.dev",
    githubUrl: "https://github.com/firewindy930/summarize",
    category: "backend",
    technologies: ["LangChain", "FastAPI", "React", "PostgreSQL"],
  },
  {
    id: "2",
    title: "retell-voice-assistant",
    description: `🎙️ Modern voice assistant built with React and Retell AI. Features real-time voice conversations, beautiful UI with Tailwind CSS, and smooth animations with Framer Motion. Perfect for building conversational AI interfaces with clean, production-ready code.`,
    image: "/retell-voice-assistant.png",
    demoUrl: "https://retell-voice-bot.vercel.app/",
    githubUrl: "https://github.com/firewindy930/retell-voice-assistant",
    category: "ai",
    technologies: ["Retell AI", "TypeScript", "React", "Framer Motion", "Vite"],
  },
  {
    id: "3",
    title: "cryptocurrency-exchange",
    description: `cryptocurrencies is a platform that offer access to a variety of different cryptocurrencies.Our mission is to offer our users easy and secure transactions and make the exchange process effortless for everyone who wants to invest in cryptocurrencies.`,
    image: "/crypto-exchange.png",
    demoUrl: "https://cryptoexchange.stellans.com/",
    githubUrl: "https://github.com/firewindy930/cryptocurrency-exchange",
    category: "blockchain",
    technologies: ["React", "BootStrap", "Rust", "Bitcoin", "Next.js", "Solidity"],
  },
  {
    id: "4",
    title: "Lovavo",
    description: `A tall stack car rental management system built with React, Laravel, and MySQL. Features user authentication, car management, rental processing, and admin dashboard. Implements multi-layer architecture with frontend, backend, database, and service layers for scalable and maintainable codebase.`,
    image: "/locavo.png",
    demoUrl: "https://locavo.vercel.app/",
    githubUrl: "https://github.com/firewindy930/LOCAVO",
    category: "fullstack",
    technologies: ["React", "Mysql", "PHP", "Laravel", "Tailwind CSS"],
  },
  {
    id: "5",
    title: "Social Crypto Platform",
    description: `Developed a real-time cryptocurrency analytics platform combining live market data with social media insights.`,
    image: "/social_crypto_platform.png",
    demoUrl: "https://social-crypto-platform.vercel.app",
    githubUrl: "https://github.com/firewindy930/Social_Crypto_Platform",
    category: "blockchain",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "Coinmarketcap API", "Shadcn UI"],
  },
  {
    id: "6",
    title: "Whop and Discord Realtime Message Bot",
    description: `A high-performance, resilient automation bot engineered to seamlessly bridge Whop Chats with Discord Webhooks in real time, ensuring instant message delivery, fault tolerance, low latency, secure handling of events, and reliable synchronization across both platforms at scale.`,
    image: "/Whop-Discord-Realtime-Message-Bot.png",
    demoUrl: "#",
    githubUrl: "https://github.com/firewindy930/Whop-and-Discord-Realtime-Message-Bot",
    category: "backend",
    technologies: ["Node.js", "Discord.js", "Whop API", "TypeScript", "Badge"],
  },
  {
    id: "7",
    title: "Whop and Discord Realtime Message Bot",
    description: `A high-performance, resilient automation bot engineered to seamlessly bridge Whop Chats with Discord Webhooks in real time, ensuring instant message delivery, fault tolerance, low latency, secure handling of events, and reliable synchronization across both platforms at scale.`,
    image: "/Whop-Discord-Realtime-Message-Bot.png",
    demoUrl: "#",
    githubUrl: "https://github.com/firewindy930/Whop-and-Discord-Realtime-Message-Bot",
    category: "backend",
    technologies: ["Node.js", "Discord.js", "Whop API", "TypeScript", "Badge"],
  },
];  
