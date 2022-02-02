// React
import React from "react";

// Libs
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";

// Styles
import styles from "./Initialize.module.css";

export const Initialize = () => {
  return (
    <section className={styles.content}>
      <div className={clsx("wrapper", styles.steps)}>
        <div className={styles.amazon} />
        <div className={styles.practice}>
          <h1 className={styles.title}>
            Understand how to use our API in just 5 minutes.
          </h1>
          <ol>
            <li>
              Access our website in a test environment and register by &nbsp;
              <Link
                to="https://b2b-hml.carbonext.com.br/auth/signup"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                clicking here
              </Link>
              .
            </li>
            <li>
              Fill the card with the number &nbsp;
              <span className={styles.c1}>4242 4242 4242 4242</span>, with any
              CVC and any future expiration date.
            </li>
            <li>Enter the amount of VCUs and complete the purchase.</li>
          </ol>
          <p>
            Now with your&nbsp;
            <span className={styles.c1}>client_id</span> and{" "}
            <span className={styles.c1}>client_secret</span> you will be able to
            make requests to our API
          </p>
        </div>
      </div>
    </section>
  );
};
