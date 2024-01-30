import React, { useState } from "react";
import styles from "./EMDRI.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";


export const EMDRI = () => {
    return (
      <section className={styles.EMDRIsection}>
        <h2 className={styles.title}> EMDR Intensive Therapy</h2>

        <div className={styles.topDiv}>
          <p>
            Eye Movement Desensitization and Reprocessing (EMDR) is a
            psychotherapy treatment that is designed to alleviate the distress
            associated with traumatic memories. It can be performed in a series
            of regular 1 hour sessions, or as a 3-6 hour Intensive. To decide
            what is right for you, schedule a Complimentary Phone Consultation.
          </p>
          <img
            src={getImageUrl("hero/TherapistOffice.jpg")}
            className={styles.therapistOffice}
            alt="therapist office"
          />
          <div className={styles.process}>
            <h3>EMDR Intensive Process:</h3>
            <ul className={styles.numberedList}>
              <li className={styles.numberedItem}>
                Complimentary phone consultation <br />(30 minutes)
              </li>
              <li className={styles.numberedItem}>
                Pre-Intensive Interview Assessment <br />(1 hour)
              </li>
              <li className={styles.numberedItem}>
                EMDR Intensive Sessions <br />(3-6 Hours)
              </li>
              <li className={styles.numberedItem}>
                Post Intensive Follow Up <br />(1 hour)
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <a href="https://heidi-esparrago.clientsecure.me/">
            <button className={styles.bookNowEMDR} id="adultButton">
              Book a Complimentary Phone Consultation
            </button>
          </a>
        </div>
        <div className={styles.footer}>
          <p>
            If you're still not ready, or to read more about EMDR and recieve
            other helpful mental health resources, visit our
            <Link to="/ResourcePage">Resources Page</Link> or our
            <a href="/FAQPage">FAQ Page</a>.
          </p>
        </div>
      </section>
    );
};
