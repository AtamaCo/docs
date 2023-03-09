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

## Data

The following section shows how you can render data from your data business capabilities.

1. Create a `lib/atama.ts` file

```ts
import { AtamaRenderer } from '@atamaco/renderer-react';
import { FetcherAtama } from '@atamaco/fetcher-atama';

import { Hero } from '../components/atama/hero';
import { LandingPage } from '../layouts/landing-page';

export const fetcher = new FetcherAtama({
  apiKey: process.env.ATAMA_API_KEY as string,
  workspaceId: process.env.ATAMA_WORKSPACE_ID as string,
});

export interface MetaData {
  seoTitle: string;
  seoDescription: string;
}

export const LAYOUTS = {
  LandingPage,
};

export const COMPONENTS = {
  Hero,
};
```

2. and then create the `LandingPage`

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

3. ... as well as the `Hero` component.

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

Now that we have the basic setup done we can create an actual page that renders experiences:

Create a `pages/[...slug].tsx` file. This is creating a [dynamic catch all route](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes).

```tsx
import type { MetaData } from '../lib/atama';
import type { NextPage } from 'next';
import type { AtamaProps } from '@atamaco/nextjs';

import { getStaticPropsFactory, getStaticPathsFactory } from '@atamaco/nextjs';
import Head from 'next/head';
import { AtamaRenderer } from '@atamaco/renderer-react';

import { COMPONENTS, LAYOUTS, fetcher } from '../lib/atama';

export const ContentPage: NextPage<AtamaProps<MetaData>> = ({ data }) => (
  <>
    <Head>
      <title>
        {typeof data?.meta?.seoTitle === 'string' ? data?.meta?.seoTitle : ''}
      </title>
      <meta
        name="description"
        content={
          typeof data?.meta?.seoDescription === 'string'
            ? data?.meta?.seoDescription
            : ''
        }
      />
    </Head>
    <main>
      {data && (
        <AtamaRenderer layouts={LAYOUTS} components={COMPONENTS} data={data} />
      )}
    </main>
  </>
);

export const getStaticPaths = getStaticPathsFactory(fetcher);
export const getStaticProps = getStaticPropsFactory(fetcher);
```

## Actions

1. Create an API route `/api/actions/[action].ts`:

```ts
import { createActionHandler } from '@atamaco/nextjs';

import { fetcher } from '../../../lib/atama';

const handler = createActionHandler(fetcher);

export default handler;
```

:::info

You can also choose a different path for the API route if this conflicts with your existing setup. If you choose a different path make sure to pass the path to the `action` method as `apiRoutePath`.

:::


2. Create a `newsletter-signup.tsx` component.

:::info

This example is using [@tanstack/react-query](https://tanstack.com/query/v3/) so make sure to install it with: `npm i @tanstack/react-query`. Make sure to add the `QueryClientProvider` to your app. See the [TanStack Query Quick Start](https://tanstack.com/query/v3/docs/react/quick-start) docs.

:::

```tsx
import type {
  AtamaComponentProps,
  AtamaActions
} from '@atamaco/renderer-react';

export interface NewsletterSignupProps {
  title: string;
  atama?: AtamaComponentProps;
  actions?: AtamaActions;
}

export function NewsletterSignup({
  title,
  atama,
  actions,
}: NewsletterSignupProps) {
  const formRef = useRef<HTMLFormElement>(null);

  const actionId = actions?.find(
    (_action) => _action.key === 'newsletter-signup',
  )?.actionId;

  if (!actionId) {
    throw new Error('No actionId found for newsletter-signup action');
  }

  const { mutate, data, isLoading } = useMutation(
    action<Array<null | { success: true }>>({
      actionId,
      slug: '/index',
    }),
  );

  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <section {...atama}>
      <form
        onSubmit={onSubmit}
        ref={formRef}
      >
        <h3>{title}</h3>
        <input
          type="email"
          name="email"
          placeholder="Type your email"
          required
        />
        <button disabled={isLoading}>Subscribe</button>
      </form>
    </section>
  );
}
```

3. add the `NewsletterSignup` component to the `components` object in `lib/atama.ts`.
