---
sidebar_position: 3
---

# Fetcher

A fetcher is responsible for providing experience data to the [integration](../integration/README.md). We currently have one fetcher called [`@atamaco/fetcher-atama`](./fetcher-atama.md) that's fetching experience data from the [Delivery API](../delivery-api.md).

There's a simple interface ([@atamaco/fetcher](https://github.com/AtamaCo/cx/blob/main/packages/fetcher/index.ts)) that each fetcher must implement. The interface has 2 methods:

## `getAllPaths(config): Promise<string[]>`

Return a list of all published paths.

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| config.excludedPaths | `string[]` | - | No | A list of paths to exclude. |
| config.includedDirectories | `string[]` | - | No | A list of directories to **include**. Any experience not in this path is not included. |
| config.excludedDirectories | `string[]` | - | No | A list of directories to **exclude**. Any experience not in these paths is included. |

For examples see [`@atamaco/fetcher-atama`](./fetcher-atama.md).

## `getData(path): Promise<CXExperience>`

Return the experience data for a specific path.

| Parameter | Type   | Default | Required? | Description |
|:----------|:-------|:--------|:----------|:------------|
| path      | string | -       | Yes       | The path of the experience to fetch |

For examples see [`@atamaco/fetcher-atama`](./fetcher-atama.md).
You can also learn more about the [`CXExperience`](../cx-experience-format.md) format.

## `action<T, R>(actionConfig): Promise<R>`

Runs an action.

| Parameter | Type   | Default | Required? | Description |
|:----------|:-------|:--------|:----------|:------------|
| actionId  | string | -       | Yes       | The id of the action |
| slug      | string | -       | Yes       | The slug of the page where the action is running |
| input     | T      | -       | Yes       | The input data for the action |
