// React
import React from "react";

// Libs
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

// Styles
import styles from "./index.module.css";

// Components
import { Amazon } from "../components/Lotties/Amazon";
import HomepageFeatures from "../components/HomePageFeatures";
import { Initialize } from "../components/Initialize";

function HomepageHeader() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div  className="container wrapper">
        <div className={styles.header}>
          <div className={styles.intro}>
            <h1 className={styles.title}>
              <Translate>Now you can make your app</Translate>
              &nbsp;
              <span className={styles.carbon}>
                <Translate>Carbon Neutral</Translate>
              </span>
            </h1>
            <p className={styles.subtitle}>
              <Translate>
                Using our documentation you will be able to calculate and
                offsetting carbon footprints, in addition to buying and selling
                credits referring to these offsetting integrating with our
                API.
              </Translate>
            </p>
            <Link className={styles.buttons} to="/docs/intro">
              <Translate>Get Started</Translate>
            </Link>
          </div>
          <div className={styles.lottie}>
            <Amazon />
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title="Home"
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <Initialize />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
