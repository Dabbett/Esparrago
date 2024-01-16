import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { getImageUrl } from "../../utils";

export const FAQ = () => {
    return (
      <section className={styles.FAQ}>
          <h1>Frequently Asked Questions</h1>
          <ul>
            <li>
              <h3 className={styles.question}>What is EMDR?</h3>
              <p className={styles.answer}> thetheahda sdhfshfd sdhfsh</p>
            </li>
          </ul>
      </section>
    );
};
