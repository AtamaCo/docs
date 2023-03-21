# Shopify
A provider to connect with Shopify.

## Configuration
To connect to your Shopify account, you'll need the following information:
* API key
* API secret key
* Access token
* Domain of your Storefront — e.g. `your-demo.myshopify.com`
* Host/store name – This is the name portion of your host name, e.g. `your-demo`

You can get these values by creating a [custom app](https://help.shopify.com/en/manual/apps/app-types/custom-apps).

You'll need at least the following scopes for the Storefront API integration:
* unauthenticated_read_content
* unauthenticated_read_metaobjects
* unauthenticated_read_product_listings
* unauthenticated_read_product_tags

## Supported capabilities

### Data
* Products – You have access to everything from the [Product API](https://shopify.dev/docs/api/admin-graphql/2023-01/objects/Product) except connections.

### Action
* Get Products
* Get Product
* Create cart
* Add cart items
* Get Cart

#### Product query
This is the fragment we use for "Get Product(s)" queries:

```
fragment AllProductFieldsFragment on Product {
    availableForSale
    description
    descriptionHtml
    featuredImage {
      altText
      height
      id
      url
      width
    }
    id
    handle
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    productType
    seo {
      description
      title
    }
    title
    vendor
    images(first: 100) {
      edges {
        node {
          altText
          height
          id
          url
          width
        }
      }
    }
    variants(first: 100) {
      edges {
        node {
          availableForSale
          id
          image {
            altText
            height
            id
            url
            width
          }
          price {
            amount
            currencyCode
          }
          sku
          title
          weight
          unitPrice {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
        cursor
      }
    }
  }
```

#### Cart query
This is the fragment we use for the "Get Cart" query:

```
fragment AllCartFieldFragment on Cart {
    id
    totalQuantity
    cost {
      subtotalAmount {
        amount
        currencyCode
      }
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          merchandise {
            ... on ProductVariant {
              id
              product {
                ...AllProductFieldsFragment
              }
            }
          }
        }
      }
    }
  }
```
