# Next.js

[Next.js](https://nextjs.org) is an open source React-based framework created by [Vercel](https://vercel.com/). Our CX Framework for Next.js supports [Static Site Generation](https://nextjs.org/docs/basic-features/data-fetching/get-static-props) (with [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)) as well as [Server Side Rendering](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props).

Consider using our [Quickstart](https://composer.atama.app/quickstart) to get a ready-to-use setup. You can also go through the steps below to understand how our CX Framework works with Next.js.

:::info

The following steps focus on using Incremental Static Regeneration connected to the [Delivery API](../cx-framework/delivery-api.md) which is our recommended approach.

:::

## Setup

1. Install the Atama packages with your preferred package manager:

```
npm i @atamaco/nextjs @atamaco/fetcher-atama @atamaco/renderer-react
```

2. Add two environment variables for the integration. Add them to your `.env` or `.env.local` file:

```
ATAMA_API_KEY=
ATAMA_WORKSPACE_ID=
```

See [here](../cx-framework/delivery-api.md#authentication) for how to generate these values.

:::info

Don't forget to add the environment variables when deploying to your hosting platform (e.g. Netlify, Vercel, etc.).

:::

3. Create a `lib/atama.ts` file

```ts
import type { Fetcher } from '@atamaco/rendering-connectors-utils';
import { FetcherAtama } from '@atamaco/fetcher-atama';

import { Hero } from '../components/atama/hero';
import { LandingPage } from '../layouts/landing-page';

export const fetcher = new FetcherAtama({
  apiKey: process.env.ATAMA_API_KEY as string,
  workspaceId: process.env.ATAMA_WORKSPACE_ID as string,
});

const layouts = {
  LandingPage,
};

const components = {
  Hero,
};

export function Render({
  data,
}: {
  data: Parameters<typeof AtamaRenderer>[0]['data'];
}) {
  return (
    <AtamaRenderer layouts={layouts} components={components} data={data} />
  );
}
```

4. and then create the `LandingPage`

```tsx
import type { ReactNode } from 'react';

import { forwardRef } from 'react';

interface LandingPageProps {
  main: ReactNode;
}

export const LandingPage = forwardRef<HTMLDivElement, LandingPageProps>(
  ({ main }, ref) => (
    <div ref={ref}>
      <div data-atama-placement="Main">{main}</div>
    </div>
  ),
);

LandingPage.displayName = 'LandingPage';
```

5. ... as well as the `Hero` component.

```tsx
import type { AtamaComponentProps } from '@atamaco/renderer-react';

export interface HeroProps {
  title: string;
  subtitle: string;
  atama?: AtamaComponentProps;
}

export function Hero({
  title,
  subtitle,
  atama,
}: HeroProps) {
  return (
    <section {...atama}>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
    </section>
  );
}
```

## Usage

Now that we have the basic setup done we can create an actual page that renders experiences:

Create a `pages/[...slug].tsx` file. This is creating a [dynamic catch all route](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes).

```tsx
import type { InferGetServerSidePropsType, NextPage } from 'next';

import {
  getStaticPropsFactory,
  getStaticPathsFactory,
} from '@atamaco/nextjs';
import Head from 'next/head';

import { fetcher, Renderer } from '../lib/atama';

export default function ContentPage({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  <>
    <Head>
      <title>{typeof data?.meta?.seoTitle === 'string' ? data?.meta?.seoTitle : ''}</title>
      <meta name="description" content={typeof data?.meta?.seoDescription === 'string' ? data?.meta?.seoDescription : ''} />
    </Head>
    <main>
      <Renderer data={data} />
    </main>
  </>
);

export const getStaticPaths = getStaticPathsFactory(fetcher);
export const getStaticProps = getStaticPropsFactory(fetcher);
```
