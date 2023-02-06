import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Composer Core',
    image: require('@site/static/img/product-art-core.png').default,
    description: (
      <>
        Composer Core is the heart of our platform. It combines all of our best practices and lesson's learned into an architecture you can use today.
      </>
    ),
    href: '/docs/composer-core',
  },
  {
    title: 'Composer Studio',
    image: require('@site/static/img/product-art-studio.png').default,
    description: (
      <>
        Studio is the user-friendly interface of the Atama Composer platform.
      </>
    ),
    href: '/docs/composer-studio'
  },
  {
    title: 'Composer Lens',
    image: require('@site/static/img/product-art-lens.png').default,
    description: (
      <>
        Composer Lens displays useful analytics about your composable ecosystem.
      </>
    ),
    href: '/docs/composer-lens'
  },
];

function Feature({title, image, description, href}: FeatureItem) {
  return (
    <>
      <div className="col col--2 col--offset-3">
        <Link href={href}><img src={image} alt={title} width="200px" /></Link>
      </div>
      <div className="col col--4">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link href={href} className="button button--outline button--secondary">Learn more</Link>
      </div>
    </>
  );
}

export function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container margin-top--lg">
        {FeatureList.map((props, idx) => (
          <div key={idx} className="row margin-bottom--xl">
            <Feature {...props} />
          </div>
        ))}
      </div>
    </section>
  );
}
