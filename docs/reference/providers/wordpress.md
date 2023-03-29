# WordPress
A provider to connect with WordPress.

## Configuration
To connect to your WordPress instance, you'll need the following information:
* Base URL for the WordPress instance (the provider uses the out-of-the-box WordPress [REST API](https://developer.wordpress.org/rest-api/reference/))

## Supported capabilities

### Data
* Users
* Posts
* Pages
* Blocks
* Media

:::info

The WordPress API partially supports the [HAL standard](https://stateless.co/hal_specification.html) and therefore returns `_links` as part of each object's response. For the purposes of the Atama provider, we only follow (or "de-reference") the following link properties: `about`, `author`, `wp:term`, `wp:attachment`. That means, instead of simply showing the link URL, we embed the resolved JSON object for the link so you can use it in your business capabilities.

:::

### Actions
* Posts – Use this instead of the "data" capability if you need a dynamic list of blog posts.
