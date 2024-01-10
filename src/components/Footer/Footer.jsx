import React from "react";
import styles from "./Footer.module.css"
import { getImageUrl } from "../../utils";

export const Footer = () => {
    return (
      <section className={styles.container}>
        <img
          src={getImageUrl("about/logo.jpg")}
          className={styles.logo2}
          alt="EZ logo"
        />
        <h6>© Copyright Topsail Software</h6>
      </section>
    );
};