import React from "react";

// Styles
import styles from "./SectionTitle.module.css";

const SectionTitle = (props) => {
  const { title } = props;

  return (
    <div className={styles.content}>
      <div className={styles.firstbar} />
      <div className={styles.sectiontitle}>{title}</div>
      <div className={styles.secondbar} />
      <div className={styles.thirdbar} />
    </div>
  );
};

export default SectionTitle;
