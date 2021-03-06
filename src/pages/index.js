// React
import React from "react";

// Libs
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

// Styles
import styles from "./index.module.css";

// Components
import HomepageFeatures from "../components/HomePageFeatures";
import { Initialize } from "../components/Initialize";
import { Experience } from "../components/Experience";
import SectionTitle from "../components/SectionTitle";

function HomepageHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.banner}>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>
            <Translate>Now you can make your business</Translate>
            <br />

            <span className={styles.carbon}>
              <Translate>Carbon Neutral</Translate>
            </span>
          </h1>
        </div>
      </div>
      <div className={styles.darkGradient} />
      <div className={styles.intro}>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            <Translate>
              Using our APIs ecossystem you can offset greenhouse gases emissions from apps, operations and products. Giving you the possibility to offer solutions that
              contribute preserving the Amazon Rainforest, thus mitigating
              climate changes.
            </Translate>
            <br />
            <br />
            <Translate>
              In our docs, you will learn how to integrate with our APIs to calculate and offset your carbon emissions.
            </Translate>
          </p>
          <Link className="default-btn" to="/docs/intro">
            <Translate>Get Started</Translate>
          </Link>

          <div className={styles.divider} />

          <SectionTitle
            title={
              <p>
                <Translate>How to use</Translate>
              </p>
            }
          />
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout title="Home" description="Carbonext API B2B documentation">
      <HomepageHeader />
      <main>
        <Initialize />
        <HomepageFeatures />
        <Experience />
      </main>
    </Layout>
  );
}
