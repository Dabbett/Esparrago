import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { getImageUrl } from "../../utils";

export const FAQ = () => {
    return (
      <section className={styles.FAQ}>
        <h1>Frequently Asked Questions</h1>
        <ul className={styles.firstSection}>
          <li className={styles.qa}>
            <h3 className={styles.question}>Do you accept insurance?</h3>
            <p className={styles.answer}>
               I am in network with the following insurance companies:
               {/* (*Please note that coverage varies for
              <a href="/FAQPage/#EMDRIQA">EMDRI</a>.) */}
            </p>
            <h4 className={styles.subheading}> North Carolina: </h4>
            <p className={styles.answer}>
              <ul className={styles.insuranceList}>
                <li className={styles.insuranceListItem}>Aetna</li>
                <li className={styles.insuranceListItem}>Blue Cross and Blue Shield
              of North Carolina</li>
                <li className={styles.insuranceListItem}>Blue Cross Blue Shield of Massachusetts</li>
                <li className={styles.insuranceListItem}>Cigna</li>
                <li className={styles.insuranceListItem}>Horizon Blue Cross Blue Shield of New Jersey</li>
                <li className={styles.insuranceListItem}>Optum</li>
                <li className={styles.insuranceListItem}>Oscar Health</li>
                <li className={styles.insuranceListItem}>Oxford</li>
                <li className={styles.insuranceListItem}>United Healthcare</li>
              </ul>
               
            </p>
            <h4 className={styles.subheading}> New York: </h4>
            <p className={styles.answer}>
            <ul className={styles.insuranceList}>
                <li className={styles.insuranceListItem}>Aetna</li>
                <li className={styles.insuranceListItem}>Cigna</li>
                <li className={styles.insuranceListItem}>Optum</li>
                <li className={styles.insuranceListItem}>UHC</li>
                <li className={styles.insuranceListItem}>UMR</li>
                <li className={styles.insuranceListItem}>(Coming Soon) BCBS of Massachusetts</li>
                <li className={styles.insuranceListItem}>(Coming Soon) Empire BCBS</li>
              </ul>
            </p>
            <p className={styles.answer}>
              <br></br>
             **I also accept self pay and can provide a superbill for Out of Network reimbursement.**
              
            </p>
          </li>
          <li className={styles.qa}>
            <h3 className={styles.question}>
              Are your appointments in-person or virtual?
            </h3>
            <p className={styles.answer}>
              For Adults: I offer appointments exclusively via telehealth at
              this time. Sessions are conducted using HIPAA compliant software.
              <br />
              For Children: I offer appointments exclusively in-person at my
              Wilmington, NC. office at this time.
            </p>
          </li>
          {/* <li className={styles.qa}>
          <h3 className={styles.question}>
              
            </h3>
            <h3 className={styles.question}>
              
            </h3>
            <p className={styles.answer}>
              
            </p>
          </li> */}
        </ul>
        <ul className={styles.secondSection}>
          {/* <li className={styles.qa}>
            <h3 className={styles.question}>What is EMDR?</h3>
            <p className={styles.answer}>
              From
              <a
                href="https://connectemdr.com/what-is-emdr/"
                className={styles.EMDRlink}
              >
                Connect EMDR
              </a>
              : EMDR is an evidence-based treatment for children, teens, and
              adults. It simply activates the brain’s natural, adaptive
              information processing system so that old experiences and
              problematic memories can finally be fully processed, synthesized,
              and stored in a healthy way.” “More than 30 positive controlled
              research studies support the benefits of EMDR for depression,
              PTSD, anxiety, panic disorders, and more. That’s why EMDR Therapy
              is endorsed by the World Health Organization, the American
              Psychiatric Association, and the Department of Veterans’ Affairs,
              among others, for the treatment of PTSD and trauma.” “EMDR can
              reduce and even eliminate the disturbing thoughts and emotions,
              and physical sensations associated with difficult past
              experiences. After treatment, upsetting life events are remembered
              but now feel more neutral, distant, and “in the past.” They are
              much less likely to be triggered by reminders in daily life.”
              “While research shows that just three, 90-minute sessions can
              eliminate PTSD symptoms for a single-incident trauma, many clients
              don’t report major traumatic experiences or symptoms that would
              meet diagnostic criteria for Post Traumatic Stress Disorder. Their
              suffering is still real, and EMDR can help.”
            </p>
          </li>
          <li className={styles.qa}>
            <h3 className={styles.question}>Why EMDR Intensive?</h3>
            <p className={styles.answer}>
              Some individuals may have limited availability due to work,
              family, or other commitments. EMDR intensive sessions may allow
              them to complete the therapy in a shorter time frame, such as a
              few consecutive days, rather than spreading it out over several
              weeks. <br />I offer both standard EMDR and EMDR intensive.
              Contact me today to discuss what's right for you!
            </p>
          </li>
          <li className={styles.qa}>
            <h3 className={styles.question}>
              Is an EMDR Intensive right for me?
            </h3>
            <p className={styles.answer}>
              A complimentary phone session will help assess suitability. Due to
              the immersive nature of this type of therapy, clients must
              demonstrate emotional stability. Typically, for clients to be
              suitable for this type of session, the client must not be
              experiencing thoughts of self-harm, experiencing suicidal
              ideation, or undergoing a mental health crisis.
            </p>
          </li> */}
          <li className={styles.qa}>
            <h3 className={styles.question} id="EMDRIQA">
              What is the Cost of EMDRI?
            </h3>
            <p className={styles.answer}>
              {/* The initial assessment leading up to the EMDR Intensive may be
              covered by insurance but EMDR intensives are not covered by
              insurances. Since this is considered "private pay" I am not constrained by the
              limits of insurance policies, including session limits. This
              allows me to tailor treatment to meet your needs! Your
              FREE Consultation will help determine the end cost. */}
              Weekly EMDR sessions and initial assessments for intensives may be covered by insurance. EMDR Intensive sessions are not covered by insurances due to the structure of this format. Since these sessions are considered private pay, I am not constrained by the limits of insurance policies which allows me to tailor treatment to meet your needs! Your FREE Consultation will help determine the end cost. 
            </p>
          </li>
          
        </ul>
        <h4 className={styles.footerComment}> If you'd like more informaton or you're ready to start healing now: <a href="/ContactPage">
            <button className={styles.contactMe} id="contactMeButton">
              Contact Me
            </button>
          </a></h4>
      </section>
    );
};
