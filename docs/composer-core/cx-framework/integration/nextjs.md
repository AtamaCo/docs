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
