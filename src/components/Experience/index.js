// React
import React, { useEffect } from "react";

// Libs
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Aos from "aos";

// Styles
import styles from "./Experience.module.css";
import "aos/dist/aos.css";

const FeatureList = [
  {
    title: <Translate>Freight</Translate>,
    Svg: require("../../../static/img/icons/freight.svg").default,
    description: (
      <>
        <Translate>
          It's possible to offer your final customer the option of a Carbon
          Neutral freight, that is, to offset the carbon footprint of
          transporting the product to his home.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Flights</Translate>,
    Svg: require("../../../static/img/icons/flight.svg").default,
    description: (
      <>
        <Translate>
          Airlines can offer Carbon Neutral flights to their passengers.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Bus trip</Translate>,
    Svg: require("../../../static/img/icons/bus.svg").default,
    description: (
      <>
        <Translate>
          Bus and tour companies can offer their customers the possibility of
          offsetting the carbon footprint of their trips.
        </Translate>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={styles.icon}>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="padding-horiz--md">
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export const Experience = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={styles.bg}>
      <div className={styles.features}>
        <div
          data-aos="zoom-in"
          className={styles.wrapper}
        >
          <h1 className={clsx(styles.title, styles.tmain)}>
            <Translate>
              Carbon Neutral experience for different market sectors
            </Translate>
          </h1>

          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
