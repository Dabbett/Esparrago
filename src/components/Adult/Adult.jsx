/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Adult.module.css";
import { getImageUrl } from "../../utils";

export const Adult = () => {
  return (
    <section className={styles.container} id="Adult">
      <h1>Adult Therapy:</h1>
      <img
        src={getImageUrl("hero/TherapistOffice.jpg")}
        className={styles.adultTherapy}
        alt="therapist office"
      />
      <p className={styles.adultP}>
        I believe in healing through corrective experiences and prefer to use
        methods that are designed to alleviate the distress associated with
        painful memories. This includes Eye Movement Desensitization &
        Reprocessing (EMDR) and other Experiential Therapy modalities that are
        proven to be equally as effective in a virtual setting.
        <br />
        <br />
        Offering Virtual Appointments for Adults in NC and NY
      </p>
      <a href="https://heidi-esparrago.clientsecure.me/">
        <button className={styles.bookNow} id="adultButton">
          Book Now
        </button>
      </a>
    </section>
  );
};


