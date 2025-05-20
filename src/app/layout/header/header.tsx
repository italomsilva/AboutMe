"use client";
import Link from "next/link";
import { navLinks, socialLinks } from "@/app/data/links";
import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [menuIsActive, setMenuIsActive] = useState(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>
        Dev.<strong>Italo</strong>
      </h1>

      <div
        onClick={() => setMenuIsActive(!menuIsActive)}
        className={
          menuIsActive
            ? `${styles.menu_burguer} ${styles.active}`
            : styles.menu_burguer
        }
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navLinks.map((item) => (
            <li key={item.href} className={styles.navItem}>
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
          <li className={styles.social}>
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.social_icon}
              >
                <i>{item.icon}</i>
              </a>
            ))}
          </li>
        </ul>
      </nav>
    </header>
  );
}
