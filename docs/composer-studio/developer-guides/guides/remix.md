# Remix

[Remix](https://remix.run) is an open source React-based framework maintained by [Shopify](https://shopify.com/). Our CX Framework for Remix supports fetching data and running actions for your custom storefront with Atama. This guide walks you through setting up your website so you can render experiences.

## Setup

1. Install the Atama packages with your preferred package manager

```
npm i @atamaco/remix @atamaco/fetcher-atama @atamaco/renderer-react
```

2. Add two environment variables for the integration. Add them to your `.env` or `.env.local` file:

```
ATAMA_API_KEY=
ATAMA_WORKSPACE_ID=
```

See [here](../cx-framework/delivery-api.md#authentication) for how to generate these values.

:::info

Don't forget to add the environment variables when deploying to your hosting platform.

:::

3. Create an `app/services/atama.server.ts` file

```ts
import { FetcherAtama } from '@atamaco/fetcher-atama';
import { AtamaClient } from '@atamaco/remix';

export const fetcher = new FetcherAtama({
  apiKey: process.env.ATAMA_API_KEY as string,
  workspaceId: process.env.ATAMA_WORKSPACE_ID as string,
});

export const client = new AtamaClient(fetcher);
```

4. create `app/services/atama.tsx`


```ts
import type { V2_HtmlMetaDescriptor } from '@remix-run/server-runtime';
import type { CXExperience } from '@atamaco/cx-core';
import { PageHeader } from '~/components/page-header';
import { Page } from '~/components/layouts/page';
import { Banner } from '~/components/banner';

export const layouts = {
  page: Page,
};

export const components = {
  'page-header': PageHeader,
  banner: Banner,
};

export interface MetaData {
  seoTitle: string;
  seoDescription: string;
}

export interface Session {
  newsletterSignup: boolean;
}

export function metaFn({
  data,
}: {
  data: CXExperience<MetaData>;
}): V2_HtmlMetaDescriptor[] {
  if (!data) {
    return [];
  }

  return [
    {
      title: data.meta?.seoTitle || '',
    },
    {
      name: 'description',
      content: data.meta?.seoDescription || '',
    },
  ];
}
```

5. create the render component: `app/components/render.tsx`:

```tsx
import { AtamaRenderer } from '@atamaco/renderer-react';
import { layouts, components } from '~/services/atama';

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

6. create the `Page` layout: `app/components/layouts/page.tsx`:

```tsx
import type { ReactNode } from 'react';

import { forwardRef } from 'react';

interface PageProps {
  header: ReactNode;
  main: ReactNode;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ header, main }, ref) => {
    return (
      <div className="relative" ref={ref}>
        <div data-atama-placement="Header">{header}</div>
        <main>
          <div className="max-w-6xl mx-auto grid gap-4">
            <div data-atama-placement="Main">{main}</div>
          </div>
        </main>
      </div>
    );
  },
);

Page.displayName = 'Page';
```

7. create the `PageHeader` and `Banner` components:

`app/components/page-header.tsx`

```tsx
import type { AtamaComponentProps } from '@atamaco/renderer-react';
import type { DataFunctionArgs } from '@remix-run/node';
import { Link } from '@remix-run/react';
import type { CartBusinessCapability } from '~/services/business-capabilities';
import { getSession } from '~/services/sessions';

interface PageHeaderProps {
  atama?: AtamaComponentProps;
}

export function PageHeader({ quantity, atama }: PageHeaderProps) {
  return (
    <header
      className="max-w-6xl mx-auto py-8 sticky top-0 backdrop-blur-md z-20 px-8 lg:px-0 h-28"
      {...atama}
    >
      <div className="flex">
        <Link to="/" className="font-bold">
          WNDR
        </Link>
        <nav className="pl-12 grow">
          <Link to="/products">Products</Link>
        </nav>
      </div>
    </header>
  );
}
```

`app/components/banner.tsx`

```tsx
import type { AtamaComponentProps } from '@atamaco/renderer-react';

interface BannerProps {
  title: string;
  subtitle: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
  variant?: 'light' | 'dark';
  contrast?: boolean;
  atama?: AtamaComponentProps;
}

export function Banner({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  atama,
}: BannerProps) {
  return (
    <section {...atama} className="py-4">
      <div className="relative py-24 lg:py-40">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover absolute inset-0 w-full h-full rounded"
        />
        <div className="relative">
          <div
            className="px-12 text-white"
          >
            <p>{subtitle}</p>
            <div className="pt-1 pb-6">
              <h3>{title}</h3>
            </div>
            {ctaLabel && ctaHref ? (
              <a href={ctaHref}>{ctaLabel}</a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
```

## Usage

Now that we have the basic setup done we can create an actual page that renders experiences:

Create a `app/routes/$.tsx` file. This is creating a [splat route](https://remix.run/docs/en/main/file-conventions/route-files-v2#splat-routes).

```tsx
import { useLoaderData } from '@remix-run/react';
import type { MetaData } from '~/services/atama.server';
import { client } from '~/services/atama.server';

import { metaFn } from '~/services/atama';
import type { LoaderArgs } from '@remix-run/node';
import { Render } from '~/components/render';

export const loader = async (args: LoaderArgs) => {
  return client.loader<MetaData>(args, '/index');
};

export const meta = metaFn;

export default function Index() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <Render data={data} />
    </>
  );
}
```
