import React, { useState } from "react";
import styles from "./Specialties.module.css";
import { getImageUrl } from "../../utils";

export const Specialties = () => {
  return (
    <section className={styles.inform}>
      <section className={styles.lists}>
        <div className={styles.specialtySection}>
          <h3 className={styles.title}>Specialty Areas:</h3>
          <ul className={styles.specAreas}>
            <li>Anxiety</li> 
            <li>Depression</li>
            <li>Family Conflict</li>
            <li>First Responder Critical Incidents</li>
            <li>Grief/Loss</li>
            <li>Life Transitions</li>
            <li>Maternal Mental Health</li>
            <li>Parenting</li>
            <li>Sexual Abuse</li>
            <li>Stress</li>
            <li>Trauma and PTSD</li>
            <li>Women's Issues</li>
          </ul>
        </div>
        <div className={styles.specialtySection}>
          <h3 className={styles.title}> Treatment Approach:</h3>
          <ul className={styles.specAreas}>
            <li>Attachment-based</li>
            <li>Eye Movement Desensitization and Reprocessing (EMDR)</li>
            <li>Emotionally Focused</li>
            <li>Experiential Therapy</li>
            <li>Mindfulness</li>
            <li>Motivational Interviewing</li>
            <li>Trauma Focused - Cognitive Behavioral Therapy</li>
            <li>Person-Centered</li>
          </ul>
        </div>
      </section>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
