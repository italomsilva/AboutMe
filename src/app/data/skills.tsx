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
import { FaFlutter, FaGolang } from "react-icons/fa6";
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

export class Skill {
  constructor(public name: string, public icon: JSX.Element) {}
}

export const skillsList:Skill[] = [
  {
    name: "Node.js",
    icon: <FaNodeJs />,
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    name: "React",
    icon: <FaReact />,
  },
  {
    name: "Flutter",
    icon: <FaFlutter />,
  },
  {
    name: "Spring",
    icon: <SiSpring />,
  },
  {
    name: "Django",
    icon: <DiDjango />,
  },
  {
    name: "Vue.js",
    icon: <FaVuejs />,
  },
  {
    name: "Angular",
    icon: <FaAngular />,
  },
];

export const languagesSkill:Skill[] = [
  {
    name: "JavaScript",
    icon: <RiJavascriptFill />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "Python",
    icon: <FaPython />,
  },
  {
    name: "Go",
    icon: <FaGolang />,
  },
  {
    name: "Java",
    icon: <FaJava />,
  },
];

export const databasesSkill:Skill[] = [
  {
    name: "MySQL",
    icon: <GrMysql />,
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
];

export const othersSkill:Skill[] = [
  {
    name: "AWS",
    icon: <FaAws />,
  },
  {
    name: "Cloudinary",
    icon: <SiCloudinary />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
  },
];
