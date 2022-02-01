// React
import React from "react";

// Libs
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Styles
import styles from "./index.module.css";

// Components
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary bg-header", styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.title}>
          <Translate>Now you can make your app Carbon Neutral!</Translate>
        </h1>
        <p className={styles.subtitle}>
          <Translate>
            Using our documentation you will be able to calculate and neutralize
            carbon footprints, in addition to buying and selling credits
            referring to these neutralizations integrating with our API.
          </Translate>
        </p>
        <Link className={styles.buttons} to="/docs/intro">
          <Translate>Get Started</Translate>
        </Link>
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
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
