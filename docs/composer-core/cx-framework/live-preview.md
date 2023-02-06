---
sidebar_position: 5
---

# Live Preview

The CX Framework supports live preview when composing experiences in Composer Studio. This enables marketers to see what the end user will see (i.e. WYSIWYG).

Every renderer ships with a preview package that can be used to enable preview.

## React

### Installation

```
npm i @atamaco/renderer-react @atamaco/preview-react
```

### Usage

The `@atamaco/preview-react` package exports a `withPreview` [Higher-Order Component](https://reactjs.org/docs/higher-order-components.html) to easily enable live preview. The setup is very similar to the [React Renderer](./renderer/react.md) except that `AtamaRenderer` is wrapped `withPreview`.

See below for an example of a `preview.tsx` page in Next.js. The page slug "preview" is [configured in the blueprint](../../composer-studio/blueprint/index.md#create-blueprint).

```tsx
import type { CXExperience } from '@atamaco/cx-core';

import { withPreview } from '@atamaco/preview-react';
import { AtamaRenderer } from '@atamaco/renderer-react';

import { Hero } from './components/hero';
import { LandingPage } from './layouts/landing-page';

const layouts = {
  LandingPage,
}

const components = {
  Hero,
};

const Preview = withPreview(AtamaRenderer);

export default function Page({
  data,
}: { data: CXExperience }) {
  return (
    <Preview
      layouts={layouts}
      components={components}
      data={data}
    />
  );
};
```

## Components

In addition to the preview page, you also need to make sure that each component has the right Atama annotations.

There should be an `atama` property that is spread on the outer most div: `{...atama}`. For example:

```tsx
import type { AtamaComponentProps } from '@atamaco/renderer-react';

type ComponentProps = {
  title: string;
  atama?: AtamaComponentProps;
};

export function HeroCard({
  title,
  atama,
}: ComponentProps) {
  return (
    <Card
      title={title}
      {...atama}
    />
  );
}
```

