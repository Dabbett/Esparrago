import React, { useState } from "react";
import styles from "./Resources.module.css";
import { getImageUrl } from "../../utils";

export const Resources = () => {
  return (
    <section className={styles.resources}>
      <div className={styles.title}>
        <h2>Resources</h2>
        <hr />
        <p>If this is an emergency, call 911.</p>
      </div>
      <div className={styles.categories}>
        <div className={styles.category}>
          <ul className={styles.links}>
            <h3>Suicide Awareness & Hotlines</h3>
            <li className={styles.link}>
              <a href="https://afsp.org/">
                American Foundation for Suicide Prevention{" "}
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://www.metanoia.org/suicide/">
                Suicide: Read This First{" "}
              </a>
            </li>

            <li className={styles.link}>
              <a href="https://988lifeline.org/">
                National Suicide Prevention Hotline
              </a>
              (800) 273-8255
            </li>
          </ul>
        </div>

        <div className={styles.category}>
          <ul className={styles.links}>
            <h3>Depression</h3>
            <li className={styles.link}>
              <a href="https://www.apa.org/topics/depression/recover">
                How Therapy Can Help Depression!
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://screening.mhanational.org/screening-tools/depression/?layout=mhats,actions_a">
                Take a Depression Screening
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://www.ncdhhs.gov/divisions/mental-health-developmental-disabilities-and-substance-use-services/hope4nc/hope4nc-helpline#:~:text=The%20Hope4NC%20Helpline%20(1%2D855,in%20North%20Carolina's%20100%20counties.">
                The Hope4NC Helpline
              </a>
              (1-855-587-3463)
            </li>
          </ul>
        </div>
        <div className={styles.category}>
          <ul className={styles.links}>
            <h3>Maternal Health</h3>
            <li className={styles.link}>
              <a href="https://www.marchofdimes.org/find-support/topics/postpartum/postpartum-depression">
                March of Dimes
              </a>
            </li>
            <li className={styles.link}>
              <a href="https://www.postpartum.net/">Post Partum Support International</a>(800)-944-4773
            </li>
            <li className={styles.link}></li>
          </ul>
        </div>
        <div className={styles.category}>
          <ul className={styles.links}>
            <h3>Sexual assault</h3>
            <li className={styles.link}></li>
            <li className={styles.link}></li>
            <li className={styles.link}></li>
          </ul>
        </div>
        <div className={styles.category}>
          <ul className={styles.links}>
            <h3>Substance Abuse</h3>
            <li className={styles.link}></li>
            <li className={styles.link}></li>
            <li className={styles.link}></li>
          </ul>
        </div>
        <div className={styles.category}>
          <ul className={styles.links}>
            <h3>Trauma and PTSD</h3>
            <li className={styles.link}></li>
            <li className={styles.link}></li>
            <li className={styles.link}></li>
          </ul>
        </div>
      </div>
    </section>
  );
};
