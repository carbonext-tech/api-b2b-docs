/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import styles from "./Footer.module.css";
import Translate from "@docusaurus/Translate";

// Icons
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineInstagram,
} from "react-icons/ai";

const Logo = require("../../../static/img/logo.png").default;
const AdressSvg = require("../../../static/img/icons/address.svg").default;

function CustomFooter() {
  const carbonextSocialLinks = [
    // Instagram
    {
      url: "https://www.instagram.com/carbonext.oficial/",
      icon: AiOutlineInstagram,
    },
    // Facebook
    {
      url: "https://www.facebook.com/carbonext.oficial/?ref=py_c",
      icon: AiFillFacebook,
    },
    // LinkedIn
    {
      url: "https://www.linkedin.com/company/carbonext-sa/",
      icon: AiFillLinkedin,
    },
    // Youtube
    {
      url: "https://www.youtube.com/channel/UCSfI3nEPvcDXG-GES7lVsjA",
      icon: AiFillYoutube,
    },
  ];

  return (
    <footer>
      <div className={styles.content}>
        <div className={clsx(styles.wrapper, styles.container)}>
          <div className={styles.social}>
            <div className={styles.logoContainer}>
              {/* <Logo className={styles.logoImg} /> */}
              <img src={Logo} alt="logo" draggable={false} />
            </div>
            <div className={styles.icons}>
              {carbonextSocialLinks.map(({ url, icon: Icon }, index) => (
                <Link
                  key={index}
                  to={url}
                  target="_blank"
                  className={styles.icon}
                >
                  <Icon size={25} />
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h1 className={styles.docs}>DOCs</h1>
              <Link to="/docs/intro" className={styles.link}>
                <Translate>Introduction</Translate>
              </Link>
            </div>
            <div className={styles.column}>
              <h1 className={styles.community}>
                <Translate>COMMUNITY</Translate>
              </h1>
              <Link
                to="https://carbonext.com.br/"
                target="_blank"
                className={styles.link}
              >
                Site
              </Link>
            </div>
            <div className={styles.column}>
              <h1 className={styles.more}>
                <Translate>MORE</Translate>
              </h1>
              <Link
                to="https://github.com/carbonext-co2e/api-b2b-docs"
                target="_blank"
                className={styles.link}
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <div className={styles.wrapper}>
          <div className={styles.copyContent}>
            <p className={clsx(styles.copyText, styles.copyright)}>
              <Translate>
                Copyright ?? All rights reserved to Carbonext
              </Translate>
            </p>
            <div>
              <p className={clsx(styles.copyText, styles.textAddress)}>
                <AdressSvg className={styles.addressIcon} />
                <span>
                  Rua do Rocio, 220 ??? cj 21 - Vila Ol??mpia ??? S??o Paulo/SP
                </span>
              </p>
              <p className={clsx(styles.copyText, styles.secondTextAddress)}>
                <AdressSvg className={styles.addressIcon} />
                <span>
                  Tv Dom Romualdo de Seixas, 1476 - 8?? andar - Sala 805 e 806
                  <br />
                  Umarizal, Bel??m/PA
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default CustomFooter;
