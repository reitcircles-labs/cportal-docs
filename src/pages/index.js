import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="ReitCircles Documentation - Learn how to use the Portal">
      <HomepageHeader />
      <main>
        <div className={styles.mainContent}>
          <p>
            Welcome to the ReitCircles documentation. This guide will help you navigate the ReitCircles platform, 
            from logging in and verifying your identity to managing your profile and using the various APIs.
          </p>
          <p>
            To get started with the docs, <Link to="/docs/token-gating-login">click here</Link> to access the User Guides.
          </p>
        </div>
      </main>
    </Layout>
  );
}
