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
      <div className={styles.intro}>
        <div className={styles.wrapper}>
          <p className={styles.description}>
            <Translate>
              Using our documentation, you will learn how to integrate with our
              APIs to be able to calculate and offset carbon footprints.
              Allowing you to offer your customers solutions that help preserve
              the Amazon rainforest and contribute to mitigate climate changes.
            </Translate>
          </p>
          <Link className="default-btn" to="/docs/intro">
            <Translate>Get Started</Translate>
          </Link>

          <div className={styles.divider} />

          <SectionTitle title={<p><Translate>How to use</Translate></p>} />
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
        <Experience />
      </main>
    </Layout>
  );
}
