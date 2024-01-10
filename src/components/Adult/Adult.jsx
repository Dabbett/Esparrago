import React, { useState } from "react";
import styles from "./Adult.module.css";
import { getImageUrl } from "../../utils";

export const Adult = () => {
  return (
    <section className={styles.container} id="Adult">
      <h1>Adult Therapy:</h1>
      <img
        src={getImageUrl("skills/adult.jpg")}
        className={styles.adultTherapy}
        alt="Adult in Therapy"
      />
      <p className={styles.adultP}>
        I believe in healing through corrective experiences and prefer to use
        methods that are designed to alleviate the distress associated with
        painful memories. This includes Eye Movement Desensitization &
        Reprocessing (EMDR) and other Experiential Therapy modalities.
        <br />
        <br />
        Offering Virtual Appointments for Adults in NC and NY
      </p>
      <a href="https://headway.co/providers/heidi-esparrago-zeppelin?utm_source=pem&utm_medium=direct_link&utm_campaign=46163">
        <button className={styles.bookNow} id="adultButton">
          Book Now
        </button>
      </a>
    </section>
  );
};


