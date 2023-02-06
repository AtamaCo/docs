---
sidebar_position: 6
---

# Delivery API

The Delivery API is capable of serving a list of paths, as well as a specific path that was previously published using the [S3 Publisher](/#). The API is running at https://cdn.prod-composer.atama.land.

## Authentication
Every request to the Delivery API requires a `Authorization: Bearer {token}` header.

You can generate a new API key in your [Account Settings](https://studio.atama.co/organization/misc/account-settings):
1. Select the workspace that the key is for.
2. Click the "Generate API Key" button.
3. Copy/paste one value at a time to where you need it.

The key works for both the "preview" and a "production" environments.

## Environments

The Delivery API works with 2 environments: A "preview" and a "production" environment.

The preview environment is useful for internal reviews of content or for testing purposes. Users composing experiences can publish to the preview environment by using "Publish Preview". The production environment is your actual "live" environment that's publicly exposed to your customers.

:::info

There have been recent changes. More details coming soon.

:::
