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
            <Translate>
              Understand how to use our API in just 5 minutes.
            </Translate>
          </h1>
          <ol>
            <li>
              <Translate>
                Access our website in a test environment and register by
              </Translate>
              &nbsp;
              <Link
                to="https://b2b-hml.carbonext.com.br/auth/signup"
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Translate>clicking here</Translate>
              </Link>
              .
            </li>
            <li>
              <Translate>Fill the card with the number</Translate>&nbsp;
              <span className="c1">4242 4242 4242 4242</span>,{" "}
              <Translate>
                with any CVC and any future expiration date.
              </Translate>
            </li>
            <li>
              <Translate>
                Enter the amount of VCUs and complete the purchase.
              </Translate>
            </li>
          </ol>
          <p>
            <Translate>Now with your</Translate>&nbsp;
            <span className="c1">client_id</span> <Translate>and</Translate>{" "}
            <span className="c1">client_secret</span>{" "}
            <Translate>you will be able to make requests to our API</Translate>.
          </p>
        </div>
      </div>
    </section>
  );
};
