import React, { useState } from "react";
import styles from "./Resources.module.css";
import { getImageUrl } from "../../utils";

export const Resources = () => {
  // const asdf = [
  //   {title:" "},
  //   {},
  //   {},
  //   {},
  //   {},
  // ]
  return (
    <section className={styles.resources}>
      <div className={styles.title}>
        <h2>Resources</h2>
        <hr />
        <p>
          If this is an emergency, call 911 or The Crisis line: (800) 273-8255.
        </p>
      </div>
      <section className={styles.main}>
        <img
          src={getImageUrl("contact/zenStones2.jpg")}
          className={styles.stones2}
          alt="zenStones2"
        />
        <div className={styles.categories}>
          <div className={styles.category}>
            <ul className={styles.links}>
              <h3>Suicide Awareness & Hotlines</h3>
              <li className={styles.link}>
                <a href="https://afsp.org/im-having-thoughts-of-suicide/">
                  American Foundation for Suicide Prevention{" "}
                </a>
              </li>
                <li className={styles.link}>
                <a href="https://www.ncdhhs.gov/divisions/mental-health-developmental-disabilities-and-substance-use-services/hope4nc/hope4nc-helpline#:~:text=The%20Hope4NC%20Helpline%20(1%2D855,in%20North%20Carolina's%20100%20counties.">
                  The Hope4NC Helpline
                </a>
                (1-855-587-3463)
              </li>
              <li className={styles.link}>
                <a href="https://988lifeline.org/">
                  National Suicide Prevention Hotline
                </a>
                (800) 273-8255
              </li>
            </ul>
          </div>

          {/* <div className={styles.category}>
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
          </div> */}
          <div className={styles.category}>
            <ul className={styles.links}>
              <h3>Maternal Health</h3>
              <li className={styles.link}>
                <a href="https://www.marchofdimes.org/find-support/topics/postpartum/postpartum-depression">
                Postpartum Depression
                </a>
              </li>
              <li className={styles.link}>
                <a href="https://www.postpartum.net/">
                  Post Partum Support International
                </a>
                (800)-944-4773
              </li>
              <li className={styles.link}>
                <a href="https://www.womenshealth.gov/TalkingPPD?gclid=Cj0KCQiA2KitBhCIARIsAPPMEhJ4xEF9B2aTiQ2hKBRnl_86lsw3PaOlRMujaevvLDgtDn8L67EsBBQaArhMEALw_wcB">
                  US Office of Womens Health{" "}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <ul className={styles.links}>
              <h3>Sexual assault</h3>
              <li className={styles.link}>
                <a href="https://www.rainn.org/resources">
                  RAINN National Sexual Assault Hotline
                </a>{" "}
                (800) 656-4673
              </li>
              <li className={styles.link}>
                <a href="https://nccasa.org/get-help/">
                  NC Coalition Against Sexual Assault
                </a>
              </li>
              <li className={styles.link}>
                <a href="https://www.nyscasa.org/">
                  {" "}
                  NY Coalition Against Sexual Assault
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.category}>
            <ul className={styles.links}>
              <h3>Substance Abuse</h3>
              <li className={styles.link}>
                <a href="https://www.samhsa.gov/find-help/national-helpline">
                  S.A.M.H.S.A. Substance Abuse Natioanl Hotline
                </a>{" "}
                (800) 662-HELP
              </li>
              <li className={styles.link}>
                <a href="https://findtreatment.gov/">Find a Treatment Center</a>
              </li>
              {/* <li className={styles.link}>
                <a href="https://cottonwooddetucson.com/drug-alcohol-self-assessment/">
                  Substance Abuse Self Assessment Tool
                </a>
              </li> */}
            </ul>
          </div>
          <div className={styles.category}>
            <ul className={styles.links}>
              <h3>Trauma and PTSD</h3>
              {/* <li className={styles.link}>
                <a href="https://www.psychologytoday.com/us/blog/the-resilient-brain/201903/trauma-and-ptsd-more-common-you-think">
                  PTSD Is More Common Than You Think
                </a>
              </li> */}
              <li className={styles.link}>
                <a href="https://www.ptsd.va.gov/">National Center for PTSD</a>
              </li>
              <li className={styles.link}>
                <a href="https://ncfrps.org">
                  NC First Responder Crisis Resources
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
};
