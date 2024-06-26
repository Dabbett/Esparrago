import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from "@emailjs/browser";


export const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();


    emailjs.sendForm(
      "service_1jqnnfi",
      "template_e4gthbu",
      e.target,
      "RagmeypRFbpOVDT4i")
    
      .then((result) => {
          alert("Youre E-mail had been submitted!");;
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <section className={styles.contact}>
      <hr />
      <div className={styles.content}>
        <div className={styles.form}>
          <header>Contact Me</header>
          <form id="form" className={styles.topBefore} onSubmit={sendEmail}>
            <input id="name" type="text" placeholder="NAME" name="from_name"/>
            <input id="email" type="email" placeholder="E-MAIL" name="from_email" />
            <input id="location" type="location" placeholder="YOUR LOCATION" name="from_location"/>
            <textarea id="message" placeholder="MESSAGE" name="message"></textarea>
            <button className={styles.submit} id="submit" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </section>
  );
};


