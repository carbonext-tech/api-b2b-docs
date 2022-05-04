// React
import React, { useEffect } from "react";

// Libs
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Aos from "aos";

// Styles
import styles from "./HomepageFeatures.module.css";
import "aos/dist/aos.css";
import SectionTitle from "../SectionTitle";

const FeatureList = [
  {
    title: <Translate>Easy to Use</Translate>,
    Svg: require("../../../static/img/icons/develop.svg").default,
    description: (
      <>
        <Translate>
          Our API is fast and easy to use, focusing on practicality.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>Focus on Result</Translate>,
    Svg: require("../../../static/img/icons/graphics.svg").default,
    description: (
      <>
        <Translate>
          Accurate calculations, and quick responses for every request.
        </Translate>
      </>
    ),
  },
  {
    title: <Translate>To be Carbon Neutral</Translate>,
    Svg: require("../../../static/img/icons/co2.svg").default,
    description: (
      <>
        <Translate>
          Now with Carbonext it's easy to make your project carbon neutral.
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

export default function HomepageFeatures() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className={styles.features}>
      <div data-aos="fade-up-right" className={styles.wrapper}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>

        <div className={styles.divider} />

        <div className={styles.fix}>
          <SectionTitle
            title={
              <p>
                <Translate>Different Markets</Translate>
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
