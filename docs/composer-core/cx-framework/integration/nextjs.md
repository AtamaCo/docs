# Next.js

:::info

We have a guide explaining how to integrate Composer Core with Next.js: [Next.js CX Framework Guide](../../guides/nextjs.md)

:::

## `getServerSidePropsFactory(fetcher)`

Returns a [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props)-compatible method.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](/docs/composer-core/cx-framework/fetcher). |
| slug | `string` | - | No | Optional slug (page path) if you want to request experience data for a specific page only. |

## `getStaticPropsFactory(fetcher)`

Returns a [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching/get-static-props)-compatible method.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](/docs/composer-core/cx-framework/fetcher). |
| revalidate | `number` | 60 | No | The revalidation timeout. See [Incremental Static Regeneration](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration) for details. |
| prefix | `string` | - | No | A prefix to use for all routes. |
| slug | `string` | - | No | Optional slug (page path) if you want to request experience data for a specific page only. |

## `getStaticPathsFactory(fetcher)`

Returns a [`getStaticPaths`](https://nextjs.org/docs/basic-features/data-fetching/get-static-paths)-compatible method.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](../fetcher/README.md). |
| config | `object` | <code>{<br />&nbsp;excludedPaths:<br />&nbsp;&nbsp;[<br />&nbsp;&nbsp;&nbsp;'/',<br />&nbsp;&nbsp;&nbsp;'404'<br />&nbsp;&nbsp;]<br />}</code> | No | By default, the homepage as well as the 404 page are excluded from being statically generated because within Next.js ideally you have a `index.tsx` and a `404.tsx` route.<br /><br />The `config` object accepts any parameter from the [`fetcher#getAllPaths` method](../fetcher/README.md#getallpathsconfig-promisestring). |

## `createActionHandler(fetcher)`

Returns an [API Route](https://nextjs.org/docs/api-routes/introduction)-compatible method.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](../fetcher/README.md). |

## `action(actionConfig)`

Returns a method that can be executed to run the action. Use with a library like [@tanstack/react-query](https://tanstack.com/query) or [swr](https://swr.vercel.app/).

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| actionId | `string` | - | Yes | The id of the action to run |
| slug | `string` | - | Yes | The slug of the page the action is run on |
| apiRoutePath | `string` | `/api/actions/` | No | The path to run the action against |

The returned method accepts an object adhering to the action business capabilities request schema.
