import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {

  

  return (
    <section className={styles.about} id="About">
      <div className={styles.content}>
        <h2 className={styles.announcement}>About Me</h2>
      </div>
      <div className={styles.content}>
        <ul className={styles.bio}>
          <li className={styles.blurb}>
            <p className={styles.item}>
              Welcome! I am Heidi, a Licensed Clinical Social Worker (LCSW) &
              Licensed Clinical Addiction Specialist (LCAS). I have been
              practicing in the field of clinical therapy for over a decade in
              various settings with children, adolescents, adults & families. I
              specialize in working with clients that have experienced trauma
              and I value supporting my clients in their healing journeys.
            </p>
          </li>
          <li className={styles.blurb}>
            <img
              src={getImageUrl("about/familyIcon.png")}
              className={styles.aboutIcons}
              alt="family icon"
            />
            <p className={styles.item}>
              I am originally from New York where I received my Master’s Degree
              in Social Work in 2012, and relocated to North Carolina in 2015. I
              am certified in Eye Movement Desensitization and Reprocessing
              (EMDR) and take a trauma-informed approach with clients.
            </p>
          </li>
          <li className={styles.blurb}>
            <p className={styles.item}>
              I strive to create a warm and welcoming environment where clients
              can feel comfortable sharing their true experiences. I'd love to
              learn about what you are going through and how I can help.
            </p>
            <img
              src={getImageUrl("about/partner.png")}
              className={styles.aboutIcons}
              alt="partner icon"
            />
          </li>
        </ul>
        <img
          src={getImageUrl("about/lean.jpg")}
          className={styles.aboutImage}
          alt="Headshot"
        />
      </div>
      <div className={styles.button}>
        
          <a href="/ContactPage">
            <button className={styles.contactMe} id="contactMeButton">
              Contact Me
            </button>
          </a>
      </div>
    </section>
  );
};
