import flutter from "../assets/technoogies/flutter.svg?raw";
import javascript from "../assets/technoogies/javascript.svg?raw";
import laravel from "../assets/technoogies/laravel.svg?raw";
import mongodb from "../assets/technoogies/mongodb.svg?raw";
import nestjs from "../assets/technoogies/nestjs.svg?raw";
import nextdotjs from "../assets/technoogies/nextdotjs.svg?raw";
import nodedotjs from "../assets/technoogies/nodedotjs.svg?raw";
import php from "../assets/technoogies/php.svg?raw";
import postgresql from "../assets/technoogies/postgresql.svg?raw";
import react from "../assets/technoogies/react.svg?raw";
import render from "../assets/technoogies/render.svg?raw";
import supabase from "../assets/technoogies/supabase.svg?raw";
import tailwindcss from "../assets/technoogies/tailwindcss.svg?raw";
import vercel from "../assets/technoogies/vercel.svg?raw";
import git from "../assets/technoogies/git.svg?raw";
import github from "../assets/technoogies/github.svg?raw";

export interface Technology {
  name: string;
  category: string;
  description: string;
  icon: string;
  color: string;
}

export const technologies: Technology[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Building modern and interactive web interfaces.",
    icon: react,
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "Building modern web applications with React.",
    icon: nextdotjs,
    color: "#000000",
  },
  {
    name: "JavaScript",
    category: "Language",
    description: "Developing dynamic web applications.",
    icon: javascript,
    color: "#F7DF1E",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    description: "Building responsive interfaces with utility-first CSS.",
    icon: tailwindcss,
    color: "#06B6D4",
  },
  {
    name: "Flutter",
    category: "Mobile",
    description: "Building cross-platform mobile applications.",
    icon: flutter,
    color: "#02569B",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Building server-side applications and services.",
    icon: nodedotjs,
    color: "#5FA04E",
  },
  {
    name: "NestJS",
    category: "Backend",
    description: "Building structured and scalable backend APIs.",
    icon: nestjs,
    color: "#E0234E",
  },
  {
    name: "Laravel",
    category: "Backend",
    description: "Developing backend applications and REST APIs.",
    icon: laravel,
    color: "#FF2D20",
  },
  {
    name: "PHP",
    category: "Backend",
    description: "Developing backend applications and web services.",
    icon: php,
    color: "#777BB4",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Working with relational databases and structured data.",
    icon: postgresql,
    color: "#4169E1",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Working with flexible NoSQL data models.",
    icon: mongodb,
    color: "#47A248",
  },
  {
    name: "Supabase",
    category: "Cloud",
    description: "Working with backend services and PostgreSQL.",
    icon: supabase,
    color: "#3FCF8E",
  },
  {
    name: "Vercel",
    category: "Cloud",
    description: "Deploying and hosting modern web applications.",
    icon: vercel,
    color: "#000000",
  },
  {
    name: "Render",
    category: "Cloud",
    description: "Deploying backend services and applications.",
    icon: render,
    color: "#000000",
  },
  {
    name: "Git",
    category: "Tools",
    description: "Version control for software projects.",
    icon: git,
    color: "#F03C2E",
  },
  {
    name: "GitHub",
    category: "Tools",
    description: "Code hosting and collaborative development.",
    icon: github,
    color: "#181717",
  },
];
