import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Translate from "@docusaurus/Translate";

const FeatureList = [
  {
    title: <Translate>Easy to Use</Translate>,
    Svg: require("../../static/img/easy.svg").default,
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
    Svg: require("../../static/img/graphics.svg").default,
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
    Svg: require("../../static/img/trees.svg").default,
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
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
