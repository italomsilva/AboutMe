import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  {
    title: "Home",
    href: "/#home",
  },
  {
    title: "Sobre",
    href: "#about",
  },
  {
    title: "Projetos",
    href: "#projects",
  },
  {
    title: "Contato",
    href: "#contact",
  },
];

export const socialLinks = [
  {
    title: "GitHub",
    href: "https://github.com/italomsilva",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/italo-monteiro-silva-219675337/",
    icon: <FaLinkedin/>,
  },
  {
    title: "Email",
    href: "mailto:dev.italoms@gmail.com",
    icon: <FaEnvelope />,
  },
]
