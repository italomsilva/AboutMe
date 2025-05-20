import MyParagraph from "../../../commom/paragraph/MyParagraph";
import styles from "./about_card.module.css";
import MyTitle from "../../../commom/title/MyTitle";

export default function AboutCard() {
  return (
    <div className={styles.about_card}>
      <MyTitle text="Quem Sou?" textAlign="center" fontSize="3rem"/>
      <MyParagraph
        textAlign="justify"
        text="Olá, meu nome é Italo Monteiro, sou engenheiro de software apaixonado por tecnologia e inovação. Tenho experiência em desenvolvimento de aplicações web e mobile, com foco em criar soluções eficientes e escaláveis. Estou sempre em busca de novos desafios e oportunidades para aprender e crescer profissionalmente. Acredito que a colaboração e o trabalho em equipe são fundamentais para o sucesso de qualquer projeto."
      />
    </div>
  );
}
