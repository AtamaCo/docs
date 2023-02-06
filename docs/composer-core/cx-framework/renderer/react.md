# React

:::info

Please refer to the [Next.js guide](../../guides/nextjs.md) if you want to see the React Renderer in action.

:::

## Installation

```
npm i @atamaco/renderer-react
```

## Usage

```tsx
import type { CXExperience } from '@atamaco/cx-core';

import { AtamaRenderer } from '@atamaco/renderer-react';

import { Hero } from './components/hero';
import { LandingPage } from './layouts/landing-page';

const layouts = {
  LandingPage,
}

const components = {
  Hero,
};

export default function Page({
  data,
}: { data: CXExperience }) {
  return (
    <AtamaRenderer
      layouts={layouts}
      components={components}
      data={data}
    />
  );
);
```
