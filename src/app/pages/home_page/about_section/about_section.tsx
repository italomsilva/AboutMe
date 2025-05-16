"use client";
import AboutCard from "@/app/components/sections_components/about/about_card/about_card";
import styles from "./about_section.module.css";
import SkillsList from "@/app/components/sections_components/about/skills_list/skills_list";

export default function AboutSection() {
  return (
    <section id="about" className={styles.about_section}>
        <AboutCard/>
        <SkillsList/>
    </section>
  );
}
