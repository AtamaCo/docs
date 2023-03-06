# Remix

:::info

We have a guide explaining how to integrate Composer Core with Remix: [Remix CX Framework Guide](../../guides/remix.md)

:::

## `AtamaClient(fetcher, componentTypeActions, logger, cache)`

The `AtamaClient` constructor accepts the following arguments:

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| fetcher | `Fetcher` | - | Yes | An instance of a [fetcher](../fetcher/README.md) |
| componentTypeActions | `ComponentTypeActions` | - | No | Read/Write action configuration. See [Action Configuration](#action-configuration) below. |
| logger | `object` | - | No | A logger object to hook into the `AtamaClient` logs. See [Logger](../logger.md) |
| cache | `object` | - | No | A cache object to customize caching behavior. See [Cache](#cache) below. |

### `AtamaClient#loadPaths(args, pathOrPaths)`

Load all paths defined in `pathOrPaths` and return as soon as a path resolves ("200").

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| args | `DataFunctionArgs` | - | Yes | A remix loader function object. [Remix loader documentation](https://remix.run/docs/en/main/route/loader), [Interface definition](https://github.com/remix-run/remix/blob/9a9c955f241c5742d227542e13c7387b99d4628b/packages/remix-server-runtime/routeModules.ts#L17-L21) |
| pathOrPaths | <code>Array<Request &#124; string></code> | - | Yes | An array of strings or Request object where a string represents a path to load. The Request object is coming from a `loaderArgs.request` and is a [Request instance](https://developer.mozilla.org/en-US/docs/Web/API/Request) |

Either throws a [Response](https://developer.mozilla.org/en-US/docs/Web/API/Response) (404 / 500) or returns a [`CXExperience`](../cx-experience-format.md).

### `AtamaClient#loader(args, pathOverride)`

Load the given path.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| args | `DataFunctionArgs` | - | Yes | A remix loader function object. [Remix loader documentation](https://remix.run/docs/en/main/route/loader), [Interface definition](https://github.com/remix-run/remix/blob/9a9c955f241c5742d227542e13c7387b99d4628b/packages/remix-server-runtime/routeModules.ts#L17-L21) |
| pathOverride | `string` | - | No | An optional path to load instead of whatever is coming in through `loaderArgs.request` |

### `AtamaClient#action(args, pathOverride)`

Run an action based on the current path and form data passed in.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| args | `DataFunctionArgs` | - | Yes | A remix loader function object. [Remix loader documentation](https://remix.run/docs/en/main/route/loader), [Interface definition](https://github.com/remix-run/remix/blob/9a9c955f241c5742d227542e13c7387b99d4628b/packages/remix-server-runtime/routeModules.ts#L17-L21) |
| pathOverride | `string` | - | No | An optional path to load instead of whatever is coming in through `loaderArgs.request` |

The FormData must include at least the following key/value pairs:

| Key | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| actionKey | `string` | - | Yes | The key of the action on the component type. This is required to understand which action to run. |
| componentType | `string` | - | Yes | The component type this action is supposed to run on. |

Returns a [JSON response](https://remix.run/docs/en/1.14.0/utils/json).

## Action Configuration

The action configuration is an object to list the resolver methods for each component type, separated by "read" and "write" actions.

Example configuration

```js
const actionConfig = {
  read: {
    cart: {
      "get-cart": {
        input: () => {},
        output: () => {},
      }
    }
  },
  write: {
    "product-detail": {
      "add-to-cart": {
        input: () => {},
        output: () => {},
      }
    },
  }
}
```

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| read | `Record<string, Record<string, ActionDefinition>>` | - | No | An object of component types and their respective action resolvers. |
| write | `Record<string, Record<string, ActionDefinition>>` | - | No | An object of component types and their respective action resolvers. |

The `ActionDefinition` is defined like this:

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| input | `(data: any, dataFnArgs: DataFunctionArgs) => Promise<object>` | - | Yes | A method that accepts the action input data and potentially transforms it. It's either a pass-through or a modification of the input data. |
| write | <code>(data: any, request: Request, inputResult: any) => Promise<object &#124; [object, ResponseInit]></code> | - | Yes | A method that accepts the Action Business Capability response and either passes it through or modifies it based on the request and the result of the `input` method. |

## Cache

Remix leaves caching up to the developer. Because we're fetching experiences that we can consider cachable we provide a simple hook to implement whatever caching is desirable for the specific solution.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| get | `(key: string) => Promise<any>` | - | Yes | A method that accepts a `key` (which is a path in our case) and returns the cached data. |
| set | `(key: string, value: any) => void` | - | Yes | A method that accepts a `key` (which is a path in our case) and a `value` (the experience data) and stores the data somewhere. |
| has | `(key: string) => boolean` | - | Yes | A method that accepts a `key` (which is a path in our case) and checks the cache for the given path. |
