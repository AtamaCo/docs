# Hydrogen

[Hydrogen](https://hydrogen.shopify.dev/) is an open source React-based framework created by [Shopify](https://shopify.com/). Our CX Framework for Hydrogen supports fetching data to drive pages of your Custom Storefront with Atama.

Consider going through our [Quickstart](https://composer.atama.app/quickstart) to get a ready-to-use setup. You can also go through the steps below to understand how our CX Framework works with Hydrogen.

## Setup

1. Install the Atama packages with your preferred package manager

```
npm i @atamaco/hydrogen @atamaco/fetcher-atama @atamaco/renderer-react
```

2. Add two environment variables for the integration. Add them to your `.env` or `.env.local` file:

```
PRIVATE_ATAMA_API_KEY=
PRIVATE_ATAMA_WORKSPACE_ID=
```

See [here](../cx-framework/delivery-api.md#authentication) for how to generate these values.

:::info

Don't forget to add the environment variables when deploying to your hosting platform.

:::

3. Create a `lib/atama.ts` file

```ts
import type {Fetcher} from '@atamaco/rendering-connectors-utils';
import {FetcherAtama} from '@atamaco/fetcher-atama';
import {AtamaRenderer} from '@atamaco/renderer-react';
import {Hero} from '~/components/atama/hero';
import {LandingPage} from '~/layouts/landing-page';
import {useQuery, HydrogenRouteProps} from '@shopify/hydrogen';

export const fetcher = new FetcherAtama({
  apiKey: Oxygen?.env?.PRIVATE_ATAMA_API_KEY as string,
  workspaceId: Oxygen?.env?.PRIVATE_ATAMA_WORKSPACE_ID as string,
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

Create a `src/pages/[...handler].tsx` file. This is creating a [catch all route](https://shopify.dev/custom-storefronts/hydrogen/routing/manage-routes#catch-all-routes).

```tsx
import {useAtamaFromRequest} from '@atamaco/hydrogen';
import {HydrogenRouteProps, Seo} from '@shopify/hydrogen';
import {Suspense} from 'react';

import {Layout} from '~/components/index.server';
import {fetcher, Render} from '~/lib/atama';

export default function Page({request}: HydrogenRouteProps) {
  const {pathname} = new URL(request.normalizedUrl);
  const data = useAtamaFromRequest(fetcher, request, 'pages');

  return (
    <Layout>
      <Suspense>
        <Seo
          type="page"
          data={{
            title: data?.meta?.seoTitle as string,
          }}
        />
      </Suspense>
      <Render data={data} />
    </Layout>
  );
}
```
