# JSON
A vendor-agnostic provider to get JSON data from an HTTPS endpoint.

## Configuration
To connect to a JSON endpoint, you'll need the following information:
* Name of the provider - A user-friendly name to identify the source capability that's provided by the endpoint.
* Absolute URL of the JSON endpoint
  * Needs to be accessbile via GET request (with `Content-Type: application/json` header)
  * Needs to return either a JSON object or array

Note that the JSON provider assumes that each endpoint only provides one type of data (i.e. one source capability).

## Supported capabilities

### Data
* Flexible - The JSON gets parsed and object properties end up as properties in your source capability schema. If an array is provided, we take the first object in the array to determine the schema.

## Example
An example of what the JSON endpoint could return:

```
[
  {
    "id": "1",
    "name": "Marco Polo",
    "bio": "Marco is a Venetian merchant, explorer, and writer who travels through Asia along the Silk Road. Though not the first European to reach China (see Europeans in Medieval China), Marco Polo was the first to leave a detailed chronicle of his experience.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Marco_Polo_portrait.jpg/220px-Marco_Polo_portrait.jpg",
    "title": "Chief Vacation Officer",
    "company": "WNDR"
  },
  {
    "id": "2",
    "name": "Tom Avery",
    "bio": "Tom is one of fewer than ten people throughout history to have completed the Polar Trilogy; full length expeditions to the South Pole and North Pole and a coast to coast crossing of Greenland. Avery and his teammates hold two Guinness World Records; the fastest surface journey to the North Pole and the fastest coast-to-coast crossing of Greenland. He is also the youngest Briton to have reached both the North and South Poles on foot.",
    "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Tom_Avery_1.jpg/220px-Tom_Avery_1.jpg",
    "title": "Product Manager",
    "company": "WNDR"
  }
]
```

This example data would be parsed and lead to a JSON schema that looks something like this:

```
{
  "$schema": "http://json-schema.org/draft-06/schema#",
  "$ref": "#/definitions/StaticAuthorStaticJson0",
  "definitions": {
    "StaticAuthorStaticJson0": {
      "type": "object",
      "additionalProperties": false,
      "properties": {
        "id": {
          "type": "string",
          "format": "integer"
        },
        "name": {
          "type": "string"
        },
        "bio": {
          "type": "string"
        },
        "image": {
          "type": "string",
          "format": "uri",
          "qt-uri-protocols": [
            "https"
          ],
          "qt-uri-extensions": [
            ".jpg"
          ]
        },
        "title": {
          "type": "string"
        },
        "company": {
          "type": "string"
        }
      },
      "required": [
        "bio",
        "company",
        "id",
        "image",
        "name",
        "title"
      ],
      "title": "StaticAuthorStaticJson0"
    }
  }
}
```

The individual records returned by this source capability can then be used in business capabilities.
