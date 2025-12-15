import styles from "./skills_list.module.css";
import MyTitle from "@/app/components/commom/title/MyTitle";
import {
  Databases,
  Frameworks,
  Languages,
  Tools,
} from "@/app/data/skills";
export default function SkillsList() {
  return (
    <div className={styles.skills_list}>
      <MyTitle text="Skills" textAlign="center" />
      <ul>
        {Object.values(Languages).map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <ul>
        {Object.values(Frameworks).map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <ul>
        {Object.values(Databases).map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <ul>
        {Object.values(Tools).map((skill, index) => (
          <li key={index}>
            <i>{skill.icon}</i>
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
