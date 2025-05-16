import toDoListImg from "../images/to-do-list.png";
import artMauricioImg from "../images/arte-mauricio.png";
import {
  databasesSkill,
  languagesSkill,
  othersSkill,
  Skill,
  skillsList,
} from "./skills";
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
    title: "Arte Mauricio",
    description:
      "Este projeto é um site de portfólio de uma loja de Artesanato. O site é responsivo e possui uma navegação fluida, permitindo que os usuários explorem facilmente as obras de arte disponíveis e possam solicitar a compra ao artesão. Possui uma seção de administração, onde o artesão pode gerenciar suas obras de arte, incluindo a adição, edição e exclusão de itens. Conta com serviço de autenticação, armazenamento de imagens em nuvem e um banco de dados para gerenciar as informações dos produtos e usuários. Um projeto full stack que demonstra a utilização de boas práticas de desenvolvimento e a criação de uma aplicação web responsiva e escalável.",
    skills: [
      languagesSkill[1],
      skillsList[0],
      skillsList[1],
      skillsList[2],
      skillsList[3],
      databasesSkill[1],
      othersSkill[1],
    ],
    image: <img src={artMauricioImg.src} alt="" />,
    linkView: "https://arte-mauricio-front-end-2d5l.vercel.app/",
    linkCode: "https://github.com/italomsilva/arte-mauricio-full-stack",
  },
  {
    title: "ToDo List Api",
    description:
      "Este projeto é uma API de Lista de Tarefas desenvolvida com NestJS e TypeScript, utilizando como base a arquitetura MVC. Cada funcionalidade foi cuidadosamente implementada, desde a gestão completa de usuários (listagem, cadastro, autenticação, edição e exclusão), passando pelo CRUD de tarefas, até a autenticação com JWT e a adição de uma camada extra de segurança com chave de acesso. A documentação da API foi detalhadamente criada e está disponível via Swagger, garantindo uma utilização clara e eficiente da API. Cada detalhe foi pensado para proporcionar uma experiência segura e eficiente no gerenciamento de tarefas.",
    skills: [
      languagesSkill[1],
      skillsList[0],
      skillsList[1],
      databasesSkill[0],
    ],
    image: <img src={toDoListImg.src} alt="" />,
    linkCode: "https://github.com/italomsilva/nest-to-do-list",
  },
  {
    title: "Customer Manager Api",
    description:
      "Este projeto é uma API de Gerenciamento de Clientes desenvolvida com Node.js e TypeScript, utilizando como banco de dados MongoDb e tomando de base a arquitetura MVC. A Api conta com o CRUD de clientes, onde é possível cadastrar, listar, editar e excluir clientes. Um projeto simples, mas que demonstra a utilização de boas práticas de desenvolvimento e a criação de uma API RESTful e utilização de banco de dados NoSQL hospedados online (MongoDb Atlas).",
    skills: [
      languagesSkill[1],
      skillsList[0],
      skillsList[1],
      databasesSkill[2],
    ],
    linkCode: "https://github.com/italomsilva/nest-customer-manager",
  },
];
