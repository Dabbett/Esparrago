import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <section className={styles.contact}>
      <hr />
      <div className={styles.content}>
        <div className={styles.form}>
          <header>Contact Me</header>
          <form id="form" className={styles.topBefore}>
            <input id="name" type="text" placeholder="NAME" />
            <input id="email" type="email" placeholder="E-MAIL" />
            <textarea id="message" placeholder="MESSAGE"></textarea>
            <button type="submit">GO!</button>
          </form>
        </div>
      </div>
    </section>
  );
};


