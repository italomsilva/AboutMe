"use client";
import MyButton from "@/app/components/commom/button/MyButton";
import styles from "./home_section.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function HomeSection() {
  return (
    <section id="home" className={styles.home_section}>
      <div className={styles.txt_container}>
        <h1>
          <strong>Olá</strong>, <br /> Seja Bem Vindo{" "}
        </h1>
        <p>
          Neste ambiente você poderá conhecer um pouco de meu trabalho e também
          entrar em contato comigo. Estou ansioso para trabalhar-mos juntos!
        </p>
        <div className={styles.btn}>
          <MyButton
            text="Contato"
            type="link"
            href="#contact"
            className={styles.home_btn}
            style={{
              hoverBackgroundColor: "var(--contrast-color-hover)",
              border: "2px solid var(--contrast-color)",
              hoverColor: "var(--contrast-color)",
              transition: "all 0.5s",
              fontSize: "2rem",
              padding: "0.5rem 4rem",
            }}
          />
        </div>
      </div>
      <div className={styles.img_container}>
        <DotLottieReact
          src="https://lottie.host/fb647949-9d11-4b42-a601-c0fbf04ed774/IgyoglUdLX.lottie"
          loop
          autoplay
        />
      </div>
    </section>
  );
}
