import React from "react";
import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils";

export const Hero = () => {


    return (
      <section className={styles.container}>
        <img
        src={getImageUrl("about/zenStones.jpg")}  {"about/LQzenStones.jpg"}
        className={styles.stones}
        alt="zenStones"
      />
      </section>
    );
};


//  To book an in-person apointment for your chiild in wilmington NC,  click here
//
//  To book a your virtual appointment or free initial consultation, click here. 
//
//EMDR Certified Therapist (EMDRIA), Private Practice Clinician,
            // Licensed in NY & NC