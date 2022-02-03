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
              Carbon Neutral experience for different market sectors
            </h1>
            <p className={styles.text}>
              <span className={styles.topic}>Freight - </span>It's possible to
              offer your final customer the option of a Carbon Neutral freight,
              that is, to offsetting the carbon footprint of transporting the
              product to his home.
            </p>
            <p className={styles.text}>
              <span className={styles.topic}>Air travel - </span>
              Airlines can allow their passengers to have a Carbon Neutral
              travel experience with the carbon footprint of their flights
              neutralized.
            </p>
            <p className={styles.text}>
              <span className={styles.topic}>Bus trip - </span>
              Bus and tour companies can offer their customers the possibility
              of neutralizing the carbon footprint of their trips.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
