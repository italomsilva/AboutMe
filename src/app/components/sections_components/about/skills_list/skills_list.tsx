import styles from "./skills_list.module.css";
import MyTitle from "@/app/components/commom/title/MyTitle";
import {
  databasesSkill,
  languagesSkill,
  othersSkill,
  skillsList,
} from "@/app/data/skills";
export default function SkillsList() {
  return (
    <div className={styles.skills_list}>
      <MyTitle text="Skills" textAlign="center" />
      <ul>
        {languagesSkill.map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <ul>
        {skillsList.map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <ul>
        {databasesSkill.map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <ul>
        {othersSkill.map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
