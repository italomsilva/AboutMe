import MyTitle from "@/app/components/commom/title/MyTitle";
import styles from "./contact_section.module.css";
import MyParagraph from "@/app/components/commom/paragraph/MyParagraph";
import contactUsImg from "../../../images/contact-us.png";
import { socialLinks } from "@/app/data/links";
import MyFormInput from "@/app/components/commom/form_input/my_form_input";
import { useState } from "react";
import { handleInputChange, handleSubmit } from "@/app/controllers/contact_section.controller";
import MyButton from "@/app/components/commom/button/MyButton";
export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  return (
    <section id="contact" className={styles.contact_section}>
      <div className={styles.container_txt}>
        <MyTitle
          text="Gostou do meu trabalho? Contate-me através deste formulário e vamos trabalhar juntos!"
          textDecoration="none"
        />
        <MyParagraph
          text="Ou se preferir, entre em contato através das redes sociais"
          color="var(--contrast-color)"
          textIndent="0"
        />
        <li>
          {socialLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </li>
        <div className={styles.img_container}>
          <img src={contactUsImg.src} alt="" />
        </div>
      </div>
      <div className={styles.container_form}>
        <form  onSubmit={(e) => handleSubmit(e, name, email, msg)}>
          <h2>
            Dev.<strong>Italo</strong>
          </h2>
          <div className={styles.container_input}>
            <MyFormInput
              id="name"
              label="Nome: "
              onChange={(e) => handleInputChange(e, setName)}
              placeholder="digite seu nome"
              required={true}
              type="text"
              value={name}
              className={styles.form_input}
            />
            <MyFormInput
              id="email"
              label="Email: "
              onChange={(e) => handleInputChange(e, setEmail)}
              placeholder="exemploemail@exemplo.com"
              required={true}
              type="email"
              value={email}
              className={styles.form_input}
            />
            <MyFormInput
              id="msg"
              label="Mensagem: "
              onChange={(e) => handleInputChange(e, setMsg)}
              placeholder="Escreva sua mensagem"
              required={true}
              type="text"
              value={msg}
              className={styles.form_input}
            />
          </div>
          <div className={styles.btn_sub}>
            <MyButton
              text="Enviar"
              type="submit"
              style={{
                padding: "0.3rem 4rem",
                hoverBackgroundColor: "var(--contrast-color-hover)",
                hoverColor: "var(--contrast-color)",
                fontSize: "1.5rem",
                borderRadius: "0.5rem",
              }}
              className={styles.btn}
            />
          </div>
        </form>
      </div>
    </section>
  );
}
