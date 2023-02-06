import React from 'react';
import styles from './hero-banner.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export function HeroBanner({ title, subtitle, buttonLabel, buttonHref }: { title: string, subtitle: string, buttonLabel?: string, buttonHref?: string }) {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{title}</h1>
        <p className="hero__subtitle">{subtitle}</p>
        {buttonLabel && buttonHref && (
          <Link className="button button--primary button--lg" href={buttonHref}>
            {buttonLabel}
          </Link>
        )}
      </div>
    </header>
  )
}
