'use client'
import AboutSection from "./about_section/about_section";
import ContactSection from "./contact_section/contact_section";
import HomeSection from "./home_section/home_section";
import ProjectsSection from "./projects_section/projects_section";

export default function HomePage() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
