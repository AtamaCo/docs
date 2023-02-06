# Hydrogen

:::info

We have a guide explaining how to integrate Composer Core with Hydrogen: [Hydrogen CX Framework Guide](../../guides/hydrogen.md)

:::

## `useAtama(fetcher, slug, basePath)`

Wraps hydrogens [`useQuery`](https://shopify.dev/api/hydrogen/hooks/global/usequery) to fetch data using the passed [`fetcher`](../fetcher/README.md).

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](../fetcher/README.md) |
| slug | `string` | - | Yes | The path to fetch data for |
| basePath | `string` | `''` | No | This is useful if your page is running in a sub-directory. |

## `useAtamaFromRequest(fetcher, request, basePath)`

Similar to `useAtama` except instead of accepting a specific path it uses the [`request`](https://shopify.dev/custom-storefronts/hydrogen/framework/routes#request-hydrogenrequest) object to look for the current url (based on the `normalizedUrl`).

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](../fetcher/README.md) |
| request | `HydrogenRequest` | - | Yes | The hydrogen request object |
| basePath | `string` | `''` | No | This is useful if your page is running in a sub-directory. |
