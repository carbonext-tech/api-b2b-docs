// React
import React from "react";

// Libs
import clsx from "clsx";
import Translate from "@docusaurus/Translate";

// Styles
import styles from "./Experience.module.css";

import Earth from "../../../static/img/earth.svg";

export const Experience = () => {
  return (
    <>
      <section className={styles.content}>
        <div className={clsx("wrapper", styles.services)}>
          <Earth className={styles.featureSvg} alt="Earth" />
          <div className={styles.info}>
            <h1 className={styles.title}>
              <Translate>Carbon Neutral experience for different market sectors</Translate>
            </h1>
            <p className={styles.text}>
              <span className={styles.topic}><Translate>Freight</Translate> - </span><Translate>It's possible to
              offer your final customer the option of a Carbon Neutral freight,
              that is, to offsetting the carbon footprint of transporting the
              product to his home.</Translate>
            </p>
            <p className={styles.text}>
              <span className={styles.topic}><Translate>Air travel</Translate> - </span>
              <Translate>Airlines can allow their passengers to have a Carbon Neutral
              travel experience with the carbon footprint of their flights
              neutralized.</Translate>
            </p>
            <p className={styles.text}>
              <span className={styles.topic}><Translate>Bus trip</Translate> - </span>
              <Translate>Bus and tour companies can offer their customers the possibility
              of neutralizing the carbon footprint of their trips.</Translate>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
