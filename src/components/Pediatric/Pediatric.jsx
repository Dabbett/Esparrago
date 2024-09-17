/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styles from "./Pediatric.module.css";
import { getImageUrl } from "../../utils";

export const Pediatric = () => {
  return (
    <section className={styles.container} id="Child">
      <h1>Pediatric Therapy:</h1>
      <img
        src={getImageUrl("about/ChildPlayingWithTrain.jpg")}
        className={styles.childTherapy}
        alt="child in therapy"
      />
      <p className={styles.pedP}>
        The first step in healing for children is creating a safe, comfortable,
        and fun environment where kids are able to show up and be their true
        selves. I believe in taking time to build rapport and a trusting
        therapeutic relationship that can be the foundation for authenticity,
        emotional vulnerability, and longterm healing.
        <br />
        <br />
        Offering In-person Appointments for children only - Wilmington, NC.
      </p>
      <a href="https://heidi-esparrago.clientsecure.me/">
        <button className={styles.bookNow} id="childButton">
          Book Now
        </button>
      </a>
    </section>
  );
};


