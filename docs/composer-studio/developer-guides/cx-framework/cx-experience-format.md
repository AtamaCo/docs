---
sidebar_position: 7
---

# CX Experience Format

The `CXExperience` format is a standardized schema to describe what an experience to be rendered looks like. It's what the [Delivery API](./delivery-api.md) returns and what the [`Renderer`](renderer/README.md) takes as input.

It's defined in the [`@atamaco/cx-core`](https://github.com/AtamaCo/cx/blob/main/packages/cx-core/index.ts) package.

## Example

```json
{
  "meta": {
    "seoTitle": "Fall Promotion 2022",
    "seoDescription": "Learn more about all our upcoming trips."
  },
  "template": "landing-page",
  "placements": [
    {
      "code": "top",
      "components": [
        {
          "placementId": "1016ef14-343d-411d-8ee3-103b68496ada",
          "type": "Banner",
          "componentTypeName": "Banner",
          "correlationId": "c1b0f2a1-642a-4815-9902-3ab83a4494a4",
          "contentProperties": {
            "title": "The world's most organized travel backpack",
            "description": " Our Nylon/Polyester-lightweight WNDR AirPak backpack merges fashion with function and pairs ultra-lightweight materials with functional and modern touches that earn it a coveted place in any traveler's suitcase.",
            "image": "//images.ctfassets.net/b48w8y34z1kc/4MHRHfZBXCaijGc0DaOBdH/29c78bf4c50ba6b1f7bc59edf892f9a0/pexels-vinta-supply-co-_-nyc-842947.jpg",
            "subtitle": "All-Season",
            "buttonText": "Shop now"
          },
          "visualProperties": {
            "--banner-title-color": "black",
            "--banner-subtitle-color": "black",
            "--banner-description-color": "black",
            "background": "black"
          }
        }
      ]
    },
    {
      "code": "top-left",
      "components": [
        {
          "placementId": "5872b05a-6e60-46a5-9b8b-7068444e9437",
          "type": "Card",
          "componentTypeName": "Card",
          "correlationId": "fe405555-30a8-4c2a-a4ea-95a4d11147f7",
          "contentProperties": {
            "title": "Boots Designed to Feel Like Sneakers",
            "description": "A new take on a classic staple, with added support and comfort. Made with breathable leather and cork footbed. No sweatshop labor used!",
            "image": "//images.ctfassets.net/b48w8y34z1kc/6Vf8ySS6D9dLaozW8pcrLK/516b57f0655ab32d43e603006f0423cd/pexels-marta-wave-5875910.jpg",
            "buttonText": "Shop now"
          },
          "visualProperties": {
            "--button-background": "black"
          }
        }
      ]
    },
    {
      "code": "top-middle",
      "components": [
        {
          "placementId": "e1864c38-8ff6-4041-ae4e-8de7c43f0513",
          "type": "Card",
          "componentTypeName": "Card",
          "correlationId": "30f5514c-86de-4c50-a994-c9f60193b660",
          "contentProperties": {
            "title": "The Ultimate Ski Jacket",
            "description": "Stay extra warm and comfortable, with this sustainable and stretchy ski jacket that's 100% waterproof, windproof, and breathable.",
            "image": "https://images.ctfassets.net/b48w8y34z1kc/5wBBfEA6tC1cjJwMzaLxaI/be0487e73cb375c654cca28af0b93bca/pexels-syed-qaarif-andrabi-7118879.jpg",
            "buttonText": "Shop Now"
          },
          "visualProperties": {
            "--button-background": "green"
          }
        }
      ]
    },
    {
      "code": "top-right",
      "components": [
        {
          "placementId": "6553b1ba-18b8-41ae-9ee7-c095235f2dc0",
          "type": "Card",
          "componentTypeName": "Card",
          "correlationId": "80fd04ce-9ac1-426c-b240-cb8a011e662b",
          "contentProperties": {
            "title": "The last tent you'll ever need",
            "description": "The world's premier tent for the conscious campers, the WNDR Tent is designed to make your adventures better! Our proprietary blend of silk and cotton canvas breathes well and repels moisture.",
            "image": "//images.ctfassets.net/b48w8y34z1kc/4b1zeErJAnNFoAy9ugNT1C/636dc1e72afc38afbc91851889798488/pexels-cliford-mervil-2398220.jpg",
            "buttonText": "Learn More"
          },
          "visualProperties": {
            "--button-background": "black"
          }
        }
      ]
    },
    {
      "code": "center",
      "components": []
    },
  ]
}
```
