// React
import React, { useEffect } from "react";

// Libs
import clsx from "clsx";
import Link from "@docusaurus/Link";
import Translate from "@docusaurus/Translate";
import Aos from 'aos';

// Styles
import styles from "./Initialize.module.css";
import "aos/dist/aos.css";

export const Initialize = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section
      data-aos="fade-right"
      className={styles.content}
    >
      <div className={clsx("wrapper", styles.steps)}>
        <div className={styles.amazon} />
        <div className={styles.practice}>
          <h1 className={styles.title}>
            <Translate>
              Understand how to use our APIs in just four steps.
            </Translate>
          </h1>
          <ol>
            <li>
              <Translate>Access our testing environment</Translate>
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
              <Translate>Use the following test card</Translate>&nbsp;
              <span className="c1">4242 4242 4242 4242</span>,{" "}
              <Translate>
                with any CVC and any future expiration date, to make an initial
                purchase.
              </Translate>
            </li>
            <li>
              <Translate>
                Select how many VCUs to buy on your first order.
              </Translate>
            </li>
            <li>
              <Translate>Now save your</Translate>&nbsp;
              <span className="c1">client_id</span> <Translate>and</Translate>{" "}
              <span className="c1">client_secret</span>{" "}
              <Translate>test keys to make API calls</Translate>.
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
