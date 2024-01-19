import React, { useState } from "react";
import styles from "./FAQ.module.css";
import { getImageUrl } from "../../utils";

export const FAQ = () => {
    return (
      <section className={styles.FAQ}>
        <h1>Frequently Asked Questions</h1>
        <ul>
          <li className={styles.qa}>
            <h3 className={styles.question}>What is EMDR?</h3>
            <p className={styles.answer}>
              From{" "}
              <a
                href="https://connectemdr.com/what-is-emdr/"
                className={styles.EMDRlink}
              >
                {" "}
                Connect EMDR
              </a>{" "}
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
          </li>
        </ul>
      </section>
    );
};
