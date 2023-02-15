# JSONata Reference

We're using JSONata throughout the app for mappings. It's very easy to use and has a ton of out-of-the-box functionality.

> JSONata is a lightweight query and transformation language for JSON data. Inspired by the 'location path' semantics of XPath 3.1, it allows sophisticated queries to be expressed in a compact and intuitive notation.

We highly recommend you check out their [documentation](https://docs.jsonata.org/overview.html) if you have any advanced use cases.

## Examples

### Ternary with fallback

This specific example can be used for mapping images from Contentful but the same pattern applies elsewhere.

```json
{
  "image": image.file.url ? ("https:" & image.file.url) : '',
}
```

### Casting

In this example, we're casting a `number` value (width) to a string.

```json
{
  "imageWidth": image.file.details.image.width ? $string(image.file.details.image.width) : '',
}
```

### Mapping arrays

This example shows how to map an array of blogs (`articles`) to a new array (`posts`).

`articles` is the name of the array field in the source capability from the provider.

```json
{
  "posts": [
    articles.{
        "date": date,
        "image": image,
        "title": title
    }
  ],
  "title": title
}
```

### String concatenation

```json
{
  "image": 'https://www.yourwebsite.com' & image,
}
```

### Find/replace values

This is a very basic example of removing HTML tags from a WordPress blog excerpt.

```json
{
  "excerpt": $replace(excerpt.rendered, /<[^>]*>/, ''),
}
```
