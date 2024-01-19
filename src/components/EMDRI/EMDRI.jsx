import React, { useState } from "react";
import styles from "./EMDRI.module.css";
import { getImageUrl } from "../../utils";

export const EMDRI = () => {
    return (
      <section className={styles.EMDRIsection}>
        <h2 className={styles.title}> EMDR Intensive Therapy</h2>

        <div className={styles.topDiv}>
          <p>
            Eye Movement Desensitization and Reprocessing (EMDR) is a
            psychotherapy treatment that is designed to alleviate the distress
            associated with traumatic memories. It can be performed in a series
            of regular 1 hour sessions, or as a 3-6 hour Intensive. To decide what is
            right for you, schedule a Complimentary Phone Consultation.
          </p>
          <img
            src="../assets/hero/therapistOffice.jpg"
            className={styles.therapistOffice}
            alt=""
          />
          <div className={styles.process}>
            <h3>EMDR Intensive Process:</h3>
            <ul className={styles.numberedList}>
              <li className={styles.numberedItem}>
                Complimentary phone consultation (30 minutes)
              </li>
              <li className={styles.numberedItem}>
                Pre-Intensive Interview Assessment (1 hour)
              </li>
              <li className={styles.numberedItem}>
                EMDR Intensive Sessions (3-6 Hours){" "}
              </li>
              <li className={styles.numberedItem}>
                Post Intensive Follow Up (1 hour)
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <a href="https://headway.co/providers/heidi-esparrago-zeppelin?utm_source=pem&utm_medium=direct_link&utm_campaign=46163">
            <button className={styles.bookNowEMDR} id="adultButton">
              Click here to book a Complimentary Phone Consultation
            </button>
          </a>
        </div>
        <div>
          <p>
            If you're still not ready, or to read more about EMDR and recieve
            other helpful mental health resources, visit our{" "}
            <a href="/ResourcePage">Resources Page</a> or our{" "}
            <a href="/FAQPage">FAQ Page</a>.
          </p>
        </div>
      </section>
    );
};
