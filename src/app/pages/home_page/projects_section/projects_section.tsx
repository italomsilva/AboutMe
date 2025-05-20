import MyTitle from "@/app/components/commom/title/MyTitle";
import styles from "./projects_section.module.css";
import { Project, projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/sections_components/projects/project_card";
import MyParagraph from "@/app/components/commom/paragraph/MyParagraph";

export default function ProjectsSection() {
  return (
    <section id="projects" className={styles.projects_section}>
      <MyTitle text="Projetos" textAlign="center" fontSize="3rem" />
      <ul className={styles.projects_list}>
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </ul>
      <MyParagraph
        className={styles.p_seemore}
        text="Arraste Para o lado para ver mais >>>"
        color="var(--contrast-color-second)"
        textAlign="center"
        textIndent="0"
      />
    </section>
  );
}
