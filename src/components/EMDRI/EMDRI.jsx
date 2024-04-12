// import React, { useState } from "react";
import styles from "./EMDRI.module.css";
import { getImageUrl } from "../../utils";
import { Link } from "react-router-dom";


export const EMDRI = () => {
    return (
      <section className={styles.EMDRIsection}>
        <h2 className={styles.title}> EMDR Intensive Therapy</h2>

        <div className={styles.topDiv}>
          <h4 className={styles.tagline}>&quot;A Faster Approach To Healing&quot;</h4>
          <p>
            {/* Eye Movement Desensitization and Reprocessing (EMDR) is a
            psychotherapy treatment that is designed to alleviate the distress
            associated with traumatic memories. It can be performed in a series
            of regular 1 hour sessions, or as a 3-6 hour Intensive. To decide
            what is right for you, schedule a Complimentary Phone Consultation. */}
          </p>
          <img
            src={getImageUrl("hero/TherapistOffice.jpg")}
            className={styles.therapistOffice}
            alt="therapist office"
          />
          <div className={styles.info}> 
          <h3>Research has shown intensive formats of EMDR to be Equally (if not more) effective than weekly sessions in reducing symptoms of PTSD. This includes sessions that are performed virtually.</h3>
          {/* <h4 className={styles.asterisk}> ** All EMDR sessions are performed virtually **</h4> */}
          </div>
          <div className={styles.process}>
            <h3>EMDR Intensive Process:</h3>
            <ul className={styles.numberedList}>
              <li className={styles.numberedItem}>
                Complimentary phone consultation <br />(30 minutes)
              </li>
              <li className={styles.numberedItem}>
                Pre-Intensive Interview Assessment <br />(1 hour)
              </li>
              <li className={styles.numberedItem}>
                EMDR Intensive Sessions <br />(Three 3.5 Hour Sessions)
              </li>
              <li className={styles.numberedItem}>
                Post Intensive Follow Up <br />(1 hour)
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <a href="https://heidi-esparrago.clientsecure.me/">
            <button className={styles.bookNowEMDR} id="adultButton">
              Book a Complimentary Phone Consultation
            </button>
          </a>
          
        </div>
        <div className={styles.footer}>
          <p>
            If you&apos;re still not ready, or to read more about EMDR and recieve
            other helpful mental health resources, visit our
            <Link to="/ResourcePage">Resources Page</Link> or our
            <a href="/FAQPage">FAQ Page</a>.
          </p>
          <hr />
          <h6 className={styles.sources}>Greenwald, R., Camden, A. A., Gamache, N., Lasser, K. A., Chapman, R., & Rattner, B. (2021). Intensive trauma-focused therapy with victims of crime. European Journal of Trauma & Dissociation, 5(3), Article 100146. https://doi.org/10.1016/j.ejtd.2020.100146</h6>
          <h6 className={styles.sources}>Ehlers, A., Hackmann, A., Grey, N., Wild, J., Liness, S., Albert, I., Deale, A., Stott, R., & Clark, D. M. (2014). A randomized controlled trial of 7-day intensive and standard weekly cognitive therapy for PTSD and emotion-focused supportive therapy. The American journal of psychiatry, 171(3), 294–304. https://doi.org/10.1176/appi.ajp.2013.13040552</h6>
          <h6 className={styles.sources}>Liou, H., Lane, C., Huang, C., Mookadam, M., Joseph, M., & Hecker DuVal, J. (2022). Eye movement desensitization and reprocessing in a primary care setting: assessing utility and comparing efficacy of virtual versus in-person methods. Telemedicine and e-Health, 28(9), 1359-1366.</h6>
        </div>
      </section>
    );
};
