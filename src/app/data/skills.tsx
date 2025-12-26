import { JSX } from "react";
import { BiLogoTypescript } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import {
  FaNodeJs,
  FaReact,
  FaPython,
  FaVuejs,
  FaAngular,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import { FaDartLang, FaFlutter, FaGolang } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiCloudinary,
  SiSpring,
  SiSocketdotio,
  SiDotnet,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export interface Skill {
  name: string;
  icon: JSX.Element;
}

export const Frameworks = {
  NodeJs: {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  NestJs: {
    name: "NestJS",
    icon: <SiNestjs />,
  },
  NextJs: {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  React: {
    name: "React",
    icon: <FaReact />,
  },
  Flutter: {
    name: "Flutter",
    icon: <FaFlutter />,
  },
  DotNet: {
    name: ".NET",
    icon: <SiDotnet />,
  },
  Spring: {
    name: "Spring",
    icon: <SiSpring />,
  },
  Django: {
    name: "Django",
    icon: <DiDjango />,
  },
  Vue: {
    name: "Vue.js",
    icon: <FaVuejs />,
  },
  Angular: {
    name: "Angular",
    icon: <FaAngular />,
  },
  TailwindCss: {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
} satisfies Record<string, Skill>;

export const Languages = {
  JavaScript: {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
  },
  TypeScript: {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  Go: {
    name: "Go",
    icon: <FaGolang />,
  },
  Dart: {
    name: "Dart",
    icon: <FaDartLang />,
  },
  CSharp: {
    name: "C#",
    icon: <TbBrandCSharp />,
  },
  Java: {
    name: "Java",
    icon: <FaJava />,
  },
  Python: {
    name: "Python",
    icon: <FaPython />,
  },
} satisfies Record<string, Skill>;

export const Databases = {
  MySQL: {
    name: "MySQL",
    icon: <GrMysql />,
  },
  Postgres: {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  Mongo: {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
} satisfies Record<string, Skill>;

export const Tools = {
  AWS: {
    name: "AWS",
    icon: <FaAws />,
  },
  Cloudinary: {
    name: "Cloudinary",
    icon: <SiCloudinary />,
  },
  Docker: {
    name: "Docker",
    icon: <FaDocker />,
  },
  Git: {
    name: "Git",
    icon: <FaGitAlt />,
  },
  SocketIo: {
    name: "Socket.io",
    icon: <SiSocketdotio />,
  },
} satisfies Record<string, Skill>;
