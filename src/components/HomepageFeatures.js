import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('../../static/img/camping.svg').default,
    description: (
      <>
        Our API is fast and easy to use, focusing on practicality.
      </>
    ),
  },
  {
    title: 'Focus on Result',
    Svg: require('../../static/img/cycling.svg').default,
    description: (
      <>
        Accurate calculations, and quick responses for every request.
      </>
    ),
  },
  {
    title: 'To be Carbon Neutral',
    Svg: require('../../static/img/nature.svg').default,
    description: (
      <>
        Now with Carbonext it's easy to make your project carbon neutral.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
