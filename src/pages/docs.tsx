import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {HomepageFeatures} from '@site/src/components/homepage-features';
import {HeroBanner} from '@site/src/components/hero-banner/hero-banner';

export default function Docs(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title="Home"
      description="Atama Documentation">
      <HeroBanner title={siteConfig.title} subtitle={siteConfig.tagline} buttonLabel="Get Started" buttonHref="/docs/getting-started"/>
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};
