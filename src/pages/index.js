// React
import React from "react";

// Libs
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import { motion } from "framer-motion";

// Styles
import styles from "./index.module.css";

// Components
import { Amazon } from "../components/Lotties/Amazon";
import HomepageFeatures from "../components/HomePageFeatures";
import { Initialize } from "../components/Initialize";
import { Experience } from "../components/Experience";

function HomepageHeader() {
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1,
      y: 0,
    }
  }

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container wrapper">
        <div className={styles.header}>
          <div className={styles.intro}>
            <h1 className={styles.title}>
              <Translate>Now you can make your business</Translate><br />

              <motion.span
                animate="visible"
                variants={letter}
                transition={{ duration: 1 }}
                initial="hidden"
                className={styles.carbon}
              >
                <Translate>Carbon Neutral</Translate>
              </motion.span>
            </h1>
            <p className={styles.subtitle}>
              <Translate>
                Using our documentation, you will learn how to integrate with our APIs to be able to calculate and offset carbon footprints. Allowing you to offer your customers solutions that help preserve the Amazon rainforest and contribute to mitigate climate changes.
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
        <Experience />
      </main>
    </Layout>
  );
}
