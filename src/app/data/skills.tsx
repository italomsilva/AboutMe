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
import { RiJavascriptFill } from "react-icons/ri";
import {
  SiNestjs,
  SiNextdotjs,
  SiPostgresql,
  SiMongodb,
  SiCloudinary,
  SiSpring,
} from "react-icons/si";


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
    icon: <SiNextdotjs  />,
  },
  React: {
    name: "React",
    icon: <FaReact />,
  },
  Flutter: {
    name: "Flutter",
    icon: <FaFlutter />,
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
  Python: {
    name: "Python",
    icon: <FaPython />,
  },
  Go: {
    name: "Go",
    icon: <FaGolang />,
  },
  Java: {
    name: "Java",
    icon: <FaJava />,
  },
  Dart:{
    name: "Dart",
    icon: <FaDartLang/>
  }
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
} satisfies Record<string, Skill>;
