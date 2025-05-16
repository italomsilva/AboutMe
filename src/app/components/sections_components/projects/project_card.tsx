import { Project } from "@/app/data/projects";
import MyParagraph from "../../commom/paragraph/MyParagraph";
import styles from "./project_card.module.css";
import MyTitle from "../../commom/title/MyTitle";
import MyButton from "../../commom/button/MyButton";

export default function ProjectCard(prop: { project: Project }) {
  const project = prop.project;
  return (
    <li className={styles.project_card}>
      <div className={styles.container_txt}>
        <MyTitle
          text={project.title}
          textAlign="center"
          textDecoration="none"
        />
        <MyParagraph text={project.description} textAlign="justify" />
      </div>
      <div className={styles.container_skills}>
        <ul className={styles.skills_list}>
          {project.skills.map((skill, index) => (
            <li key={index}>
              <i>{skill.icon}</i>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={project.linkView}
        target="_blank"
        className={styles.container_img}
        style={{display: project.image ? "flex" : "none"}}
      >
        {project.image}
      </a>
      <div className={styles.container_links}>
        <MyButton
          text="Visualizar"
          disabled={project.linkView ? false : true}
          type="link"
          href={project.linkView ? project.linkView : ""}
          target="_blank"
          style={{
            border: "2px solid var(--contrast-color)",
            hoverBackgroundColor: "var(--contrast-color-hover)",
            hoverColor: "var(--contrast-color)",
            fontSize: "1rem",
          }}
        />
        <MyButton
          text="Código"
          disabled={project.linkCode ? false : true}
          type="link"
          href={project.linkCode ? project.linkCode : ""}
          target="_blank"
          style={{
            border: "2px solid var(--contrast-color)",
            hoverBackgroundColor: "var(--contrast-color-hover)",
            hoverColor: "var(--contrast-color)",
            fontSize: "1rem",
          }}
        />
      </div>
    </li>
  );
}
