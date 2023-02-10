---
sidebar_position: 6
---

# Delivery API

The Delivery API is a GraphQL API capable of serving a list of paths, as well as a specific path that was previously published using the [S3 Publisher](../publishers/README.md). The API is running at https://cdn.atama.app/v1.

:::info

Most of the time you shouldn't interact with the Delivery API directly but rather use the [@atamaco/fetcher-atama](./fetcher/fetcher-atama.md) package.

:::

## Authentication

Every request to the Delivery API requires a `Authorization: Bearer {token}` header.

You can generate a new API key in your [Account Settings](https://composer.atama.app/organization/misc/account-settings):
1. Select the workspace that the key is for.
2. Click the "Generate API Key" button.
3. Copy/paste one value at a time to where you need it.

The key works for both the "preview" and a "production" environments.

## Environments

The Delivery API works with 2 environments: A "preview" and a "production" environment.

The preview environment is useful for internal reviews of content or for testing purposes. Users composing experiences can publish to the preview environment by using "Publish Preview". The production environment is your actual "live" environment that's publicly exposed to your customers.

## `query getPaths`

The `getPaths` query returns all published paths for the given workspace in the given environment.

The full query definitions looks as follows:

```graphql
query getPaths(pathsInput: GetPathsInput!): [String]!
```

where `GetPathsInput` is defined like this:

```graphql
input GetPathsInput {
  workspaceId: String!
  environment: Environment
  excludedPaths: String
  includedPaths: String
}
```

The table lists out all `GetPathsInput` parameters:

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| workspaceId | `string` | - | Yes | The id of the workspace you want to get published paths from. |
| environment | `preview` or `prod` | `prod` | No | The environment to get paths from |
| includedPaths | `string` | - | No | A list of directories to **include**. Any experience not in this path is not included in the response. **Note**: This is a comma-separated list. |
| excludedPaths | `string` | - | No | A list of directories to **exclude**. Any experience not in these paths is included in the response. **Note**: This is a comma-separated list. |

## `query getData`

The `getData` query returns experience data for the given path.

The full query definitions looks as follows:

```graphql
getData(dataInput: GetDataInput!): Data!
```

where `GetDataInput` is defined like this:

```graphql
input GetDataInput {
  workspaceId: String!
  environment: Environment!
  slug: String!
}
```

The table lists out all `GetDataInput` parameters:

| Parameter | Type | Default | Required? | Description |
|:----------|:-----|:--------|:----------|:------------|
| workspaceId | `string` | - | Yes | The id of the workspace you want to get published paths from. |
| environment | `preview` or `prod` | - | Yes | The environment to get paths from. |
| slug | `string` | - | Yes | The path you want to get the experience data for. |

The returned `Data` object describes your experience and has a more complex definition:

```graphql
type DataComponents {
  correlationId: String!
  placementId: String!
  type: String!
  contentProperties: JSON!
  visualProperties: JSON!
  componentTypeName: String!
  actionIds: [String]
}

type DataPlacements {
  code: String!
  embeddableBlueprint: DataEmbeddableBlueprint
  components: [DataComponents]
}

type DataEmbeddableBlueprint {
  placements: [DataPlacements]
  template: String!
}

type DataPlacements {
  code: String!
  embeddableBlueprint: DataEmbeddableBlueprint
  components: [DataComponents]
}

type Data {
  meta: JSON!
  placements: [DataPlacements]
  template: String!
}
```

Example response:

```json
{
  "meta": {
    "seoTitle": "Fall Promotion 2022",
    "seoDescription": "Learn more about all our upcoming trips."
  },
  "placements": [
    {
      "code": "top",
      "components": [
        {
          "actionIds": [],
          "componentTypeName": "Banner",
          "contentProperties": {
            "title": "The world's most organized travel backpack",
            "description": " Our Nylon/Polyester-lightweight WNDR AirPak backpack merges fashion with function and pairs ultra-lightweight materials with functional and modern touches that earn it a coveted place in any traveler's suitcase.",
            "image": "//images.ctfassets.net/b48w8y34z1kc/4MHRHfZBXCaijGc0DaOBdH/29c78bf4c50ba6b1f7bc59edf892f9a0/pexels-vinta-supply-co-_-nyc-842947.jpg",
            "subtitle": "All-Season",
            "buttonText": "Shop now"
          },
          "correlationId": "c1b0f2a1-642a-4815-9902-3ab83a4494a4",
          "placementId": "1016ef14-343d-411d-8ee3-103b68496ada",
          "type": "Banner",
          "visualProperties": {
            "bannerTitleColor": "black",
            "bannerSubtitleColor": "black",
            "bannerDescriptionColor": "black"
          }
        }
      ],
      "embeddableBlueprint": null
    },
    {
      "code": "top-left",
      "components": [
        {
          "actionIds": [],
          "componentTypeName": "Card",
          "contentProperties": {
            "title": "Boots Designed to Feel Like Sneakers",
            "description": "A new take on a classic staple, with added support and comfort. Made with breathable leather and cork footbed. No sweatshop labor used!",
            "image": "//images.ctfassets.net/b48w8y34z1kc/6Vf8ySS6D9dLaozW8pcrLK/516b57f0655ab32d43e603006f0423cd/pexels-marta-wave-5875910.jpg",
            "buttonText": "Shop now"
          },
          "correlationId": "fe405555-30a8-4c2a-a4ea-95a4d11147f7",
          "placementId": "5872b05a-6e60-46a5-9b8b-7068444e9437",
          "type": "Card",
          "visualProperties": {
            "--button-background": "black"
          }
        }
      ],
      "embeddableBlueprint": null
    },
    {
      "code": "top-middle",
      "components": [
        {
          "actionIds": [],
          "componentTypeName": "Card",
          "contentProperties": {
            "title": "The Ultimate Ski Jacket",
            "description": "Stay extra warm and comfortable, with this sustainable and stretchy ski jacket that's 100% waterproof, windproof, and breathable.",
            "image": "https://images.ctfassets.net/b48w8y34z1kc/5wBBfEA6tC1cjJwMzaLxaI/be0487e73cb375c654cca28af0b93bca/pexels-syed-qaarif-andrabi-7118879.jpg",
            "buttonText": "Shop Now"
          },
          "correlationId": "190d7af1-1031-4e0a-b88c-92d54b544e69",
          "placementId": "e1864c38-8ff6-4041-ae4e-8de7c43f0513",
          "type": "Card",
          "visualProperties": {
            "buttonBackground": "black"
          }
        }
      ],
      "embeddableBlueprint": null
    },
    {
      "code": "top-right",
      "components": [
        {
          "actionIds": [],
          "componentTypeName": "Card",
          "contentProperties": {
            "title": "The last tent you'll ever need",
            "description": "The world's premier tent for the conscious campers, the WNDR Tent is designed to make your adventures better! Our proprietary blend of silk and cotton canvas breathes well and repels moisture.",
            "image": "//images.ctfassets.net/b48w8y34z1kc/4b1zeErJAnNFoAy9ugNT1C/636dc1e72afc38afbc91851889798488/pexels-cliford-mervil-2398220.jpg",
            "buttonText": "Learn More"
          },
          "correlationId": "80fd04ce-9ac1-426c-b240-cb8a011e662b",
          "placementId": "6553b1ba-18b8-41ae-9ee7-c095235f2dc0",
          "type": "Card",
          "visualProperties": {
            "--button-background": "black"
          }
        }
      ],
      "embeddableBlueprint": null
    },
    {
      "code": "bottom",
      "components": [],
      "embeddableBlueprint": null
    }
  ],
  "template": "landing-page"
}
```