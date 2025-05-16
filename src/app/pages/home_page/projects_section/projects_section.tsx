import MyTitle from "@/app/components/commom/title/MyTitle";
import styles from "./projects_section.module.css";
import { Project, projects } from "@/app/data/projects";
import ProjectCard from "@/app/components/sections_components/projects/project_card";

export default function ProjectsSection() {
    return (
        <section id="projects" className={styles.projects_section}>
        <MyTitle text="Projetos" textAlign="center" fontSize="3rem"/>
        <ul className={styles.projects_list}>
            {projects.map((project, idx)=>(
                <ProjectCard key={idx} project={project}/>
            ))}
        </ul>
        </section>
    );
}