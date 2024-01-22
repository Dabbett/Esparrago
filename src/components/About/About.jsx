import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {

  

  return (
    <section className={styles.about} id="About">
      <div className={styles.content}>
        <h2 className={styles.announcement}>Welcome, I'm Heidi</h2>
      </div>
      <div className={styles.content}>
        <ul className={styles.bio}>
          <li className={styles.blurb}>
            <p className={styles.item}>
              I'd love the opportunity to meet you if you are looking to heal
              and better understand what you are feeling or experiencing day to
              day.
            </p>
          </li>
          <li className={styles.blurb}>
            <img
              src={getImageUrl("about/familyIcon.png")}
              className={styles.aboutIcons}
              alt="family icon"
            />
            <p className={styles.item}>
              I am particularly passionate about working with children &
              families, as well as supporting professionals who are moving
              through tough transitions or have experienced painful events.
            </p>
          </li>
          <li className={styles.blurb}>
            <p className={styles.item}>
              I'd love to partner with you to help alleviate some of the
              pressure.
            </p>
            <img
              src={getImageUrl("about/partner.png")}
              className={styles.aboutIcons}
              alt="partner icon"
            />
          </li>
          {/* <li className={styles.blurb}>
            I believe in trauma treatment & healing through corrective
            experiences. I prefer to use methods designed to alleviate the
            distress associated with painful memories. This includes Eye
            Movement Desensitization & Reprocessing (EMDR), Experiential
            Therapy, and Psychodrama. I can help you understand your present
            experiences & help create a plan for healing.
          </li>
          <li className={styles.blurb}>
            I am here to help normalize the experiences you may be having as a
            result of what you have been through. I enjoy educating throughout
            this process because I believe that increased understanding in
            itself can provide a ton of relief. I'm happy to answer ANY
            questions you might have. I'd love to learn about what you are going
            through and how I can help. Let's get started...
          </li> */}
        </ul>
        <img
          src={getImageUrl("about/headshot.jpg")}
          className={styles.aboutImage}
          alt="Headshot"
        />
      </div>
    </section>
  );
};
