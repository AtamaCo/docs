# @atamaco/fetcher-atama

The "Atama Fetcher" is fetching experience information from the [Delivery API](../delivery-api.md). See [fetcher](README.md) to understand how to use the [`getAllPaths`](README.md#getallpathsconfig-promisestring) and [`getData`](README.md#getdatapath-promisecxexperience) methods. Below you'll find out how to configure the Atama Fetcher via its constructor.

## Installation

```
npm i @atamaco/fetcher-atama
```

## Usage

```ts
import { FetcherAtama } from '@atamaco/fetcher-atama';

const client = new FetcherAtama({
  apiKey: "<CONTENT_DELIVERY_API_KEY>";
  workspaceId: "<WORKSPACE_ID>";
});
```

## API

### `FetcherAtama(config)`

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| config.apiKey | `string` | - | Yes | An API Key for the [Delivery API](../delivery-api.md) |
| config.workspaceId | `string` | - | Yes | The id of the workspace you used to publish experiences. |
| config.environment | `preview` or `prod` | `prod` | No | Whether you want to use the ["preview" or "production" environment](../delivery-api.md#environments) |
| config.url | `string` | `https://cdn.prod-composer.atama.land` | No | An alternative URL to use for the Delivery API. |
