import toDoListImg from "../images/to-do-list.png";
import artMauricioImg from "../images/arte-mauricio.png";
import resolutionAppImg from "../images/resolution-app.png";
import { Databases, Frameworks, Languages, Skill, Tools } from "./skills";
import mktChatImg from "@/app/images/mkt-chat.png"
import { JSX } from "react";

export class Project {
  constructor(
    public title: string,
    public description: string,
    public skills: Skill[],
    public image?: JSX.Element,
    public linkView?: string,
    public linkCode?: string
  ) {}
}

export const projects: Project[] = [
  {
    title: "ResolutionApp",
    description:
      "Aplicativo mobile desenvolvido para conectar usuários que buscam soluções para problemas, permitindo que a comunidade proponha e vote em resoluções. O sistema conta com autenticação robusta baseada em JWT, gerenciamento de estado (Provider), e navegação segura entre abas e rotas dinâmicas (GoRouter). Implementa ordenação complexa de soluções (priorizando aprovação e popularidade), e utiliza repositórios para desacoplar a lógica de negócio do UI, garantindo uma arquitetura limpa e escalável. Utilizando como backend a Resolution API",
    skills: [Languages.Dart, Frameworks.Flutter],
    image: <img src={resolutionAppImg.src} alt="" />,
    linkView: "https://github.com/italomsilva/resolution_app/tree/main/release",
    linkCode: "https://github.com/italomsilva/resolution_app",
  },
  {
    title: "Arte Mauricio",
    description:
      "Este projeto é um site de portfólio de uma loja de Artesanato. O site é responsivo e possui uma navegação fluida, permitindo que os usuários explorem facilmente as obras de arte disponíveis e possam solicitar a compra ao artesão. Possui uma seção de administração, onde o artesão pode gerenciar suas obras de arte, incluindo a adição, edição e exclusão de itens. Conta com serviço de autenticação, armazenamento de imagens em nuvem e um banco de dados para gerenciar as informações dos produtos e usuários. Um projeto full stack que demonstra a utilização de boas práticas de desenvolvimento e a criação de uma aplicação web responsiva e escalável.",
    skills: [
      Languages.TypeScript,
      Frameworks.NodeJs,
      Frameworks.NestJs,
      Frameworks.NextJs,
      Frameworks.React,
      Databases.Postgres,
      Tools.Cloudinary,
    ],
    image: <img src={artMauricioImg.src} alt="" />,
    linkView: "https://arte-mauricio.vercel.app/",
    linkCode: "https://github.com/italomsilva/ArteMauricio",
  },
  {
    title: "MKT Chat",
    description:
      "Aplicação de chat em tempo real desenvolvida em homenagem à Makita, mascote símbolo do IFCE que faleceu em julho de 2025. O projeto utiliza uma arquitetura full-stack conteinerizada com Docker, implementando comunicação bidirecional via WebSockets (Socket.io). No frontend, utiliza Next.js com o Tailwind CSS v4 para uma UI performática e responsiva, além de React Context API para gerenciamento de estado global e persistência de sessão. O backend, construído em NestJS, gerencia o tráfego de mensagens e eventos de conexão de forma escalável, garantindo baixa latência na troca de informações.",
    skills: [
      Languages.TypeScript,
      Frameworks.NodeJs,
      Frameworks.NestJs,
      Frameworks.NextJs,
      Frameworks.React,
      Frameworks.TailwindCss,
      Tools.Docker,
      Tools.SocketIo,
    ],
    image: <img src={mktChatImg.src} alt="MKT Chat Interface" />,
    linkCode: "https://github.com/italomsilva/mkt-chat",
  },
  {
    title: "Resolution API",
    description:
      "Este projeto, a ResolutionAPI, é uma API RESTful robusta desenvolvida em Go, seguindo os princípios de Clean Architecture. Ela serve como a espinha dorsal de uma plataforma colaborativa, permitindo que usuários reportem problemas e proponham soluções, fomentando a participação cívica, a colaboração mútua e a eficiência na resolução de desafios. A API integra uma gestão completa de usuários com diferentes perfis, funcionalidades de CRUD detalhadas para problemas e soluções, além de um sistema de reações para engajamento. A segurança é garantida por autenticação JWT e controle de acesso via API Key, com todas as interações persistidas em um banco de dados PostgreSQL.",
    skills: [Languages.Go, Databases.Postgres],
    linkCode: "https://github.com/italomsilva/go-resolution-api",
  },
  {
    title: "ToDo List Api",
    description:
      "Este projeto é uma API de Lista de Tarefas desenvolvida com NestJS e TypeScript, utilizando como base a arquitetura MVC. Cada funcionalidade foi cuidadosamente implementada, desde a gestão completa de usuários (listagem, cadastro, autenticação, edição e exclusão), passando pelo CRUD de tarefas, até a autenticação com JWT e a adição de uma camada extra de segurança com chave de acesso. A documentação da API foi detalhadamente criada e está disponível via Swagger, garantindo uma utilização clara e eficiente da API. Cada detalhe foi pensado para proporcionar uma experiência segura e eficiente no gerenciamento de tarefas.",
    skills: [
      Languages.TypeScript,
      Frameworks.NodeJs,
      Frameworks.NestJs,
      Databases.MySQL,
    ],
    image: <img src={toDoListImg.src} alt="" />,
    linkCode: "https://github.com/italomsilva/nest-to-do-list",
  },
  {
    title: "Customer Manager Api",
    description:
      "Este projeto é uma API de Gerenciamento de Clientes desenvolvida com Node.js e TypeScript, utilizando como banco de dados MongoDb e tomando de base a arquitetura MVC. A Api conta com o CRUD de clientes, onde é possível cadastrar, listar, editar e excluir clientes. Um projeto simples, mas que demonstra a utilização de boas práticas de desenvolvimento e a criação de uma API RESTful e utilização de banco de dados NoSQL hospedados online (MongoDb Atlas).",
    skills: [
      Languages.TypeScript,
      Frameworks.NodeJs,
      Frameworks.NestJs,
      Databases.Mongo,
    ],
    linkCode: "https://github.com/italomsilva/nest-customer-manager",
  },
];
