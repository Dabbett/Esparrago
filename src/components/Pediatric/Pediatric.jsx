import React, { useState } from "react";
import styles from "./Pediatric.module.css";
import { getImageUrl } from "../../utils";

export const Pediatric = () => {
  return (
    <section className={styles.container} id="Child">
      <h1>Pediatric Therapy:</h1>
      <img
        src={getImageUrl("skills/child.jpg")}
        className={styles.childImage}
        alt="child in therapy"
      />
      <p className={styles.pedP}>
        I believe in healing through corrective experiences and prefer to use
        methods that are designed to alleviate the distress associated with
        painful memories. This includes Eye Movement Desensitization &
        Reprocessing (EMDR) and other Experiential Therapy modalities.
        <br />
        <br />
        Offering kids In-person Appointments only - Wilmington, NC.
      </p>
      <a href="https://parentlikeitmatters.clientsecure.me/">
        <button className={styles.bookNow} id="childButton">
          Book Now
        </button>
      </a>
    </section>
  );
};


