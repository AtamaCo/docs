---
sidebar_position: 4
---

# Blueprint
A blueprint defines the layout of the experience and what areas (“Placements”) within are editable. Depending on your channel, it may be directly connected to a template or layout in your codebase.

## Show Blueprints
To see all blueprints in the current workspace, navigate to the "Blueprints" page. You can narrow down the table of records by searching, filtering, or sorting.

## Create Blueprint

1. Click the "+ Create" button at the top of the "Blueprints" page.
2. Provide all the required fields of the form:
    1. "Name" - The name is shown to users when creating experiences.
    2. "Description" - Optional field to provide extra information about the blueprint use case.
    3. "Channel" - This controls for which channel the blueprint will show up.
    4. "Template" - This value is used to connect the blueprint with the templating or layouting system in your channel's codebase.
    5. "Preview Slug" - The live preview within Studio is rendered differently from production pages because it needs to support editing capabilities (read up more about [how preview works](../../developer-guides/cx-framework/live-preview.md)). With the preview slug, you can define the route that's used in your codebase to handle the live preview. The field defaults to `/preview` and more than one blueprint can use the same preview slug.
    6. "Is this blueprint embeddable?" - Check the box if this blueprint can be used in a placement area of another blueprint. You can read up more about [embeddable blueprints](#embeddable-blueprints) below.
    7. "Does this blueprint support dynamic content sources?" - Read up more about [dynamic content sources](#dynamic-content-sources) below.
    8. "Metadata Property Configuration" - JSON Schema config for meta properties. Here's an example config for the web channel where SEO title and description are very common.

    ```
    {
      "$schema": "http://json-schema.org/draft-07/schema",
      "$id": "#/blueprint/metadata/landingPage",
      "type": "object",
      "examples": [
        {
          "seoTitle": "Amazing Webpage!",
          "seoDescription": "This is a great webpage"
        }
      ],
      "required": [
        "seoTitle",
        "seoDescription"
      ],
      "properties": {
        "seoTitle": {
          "$id": "#/properties/seoTitle",
          "type": "string",
          "title": "Title",
          "description": "The title of the page",
          "minLength": 3
        },
        "seoDescription": {
          "$id": "#/properties/seoDescription",
          "type": "string",
          "title": "Description",
          "description": "The description of the page",
          "minLength": 3
        }
      },
      "additionalProperties": true
    }
    ```
3. Click "Create" when you're ready.
4. The next step is to [set up your placement areas](#edit-placement-areas).

## Edit Blueprint
To edit an existing blueprint, click on the name in the "Blueprints" table. From there, you can make whatever changes you have in mind and confirm them by clicking "Save" at the bottom.

Please refer to the field descriptions [above](#create-blueprint).

Note that placement areas are edited on a separate page.

### Edit Placement Areas
A placement area is an area within a blueprint that's been identified as being authorable. It also defines what components are allowed within it.

If there are no placement areas yet, start by clicking the "+ Add new placement area" button.

To edit a placement area, fill out the required fields and click "Save" when you're done.

* "Placement area name" - This identifies the area to the user and is shown in the [experience editor](../experience/index.md#add-component).
* "Placement area code" - This maps to an area of your template/layout in your codebase. For example, you may have a "sidebar" area in your web page code that you want to allow certain components in.
* "Allowed component types" - Check the box for one or more components that users will be allowed to put into this area.
* "Accepts only a blueprint" - If you want to embed another blueprint instead of individual components, check this box. See more about [embeddable blueprints](#embeddable-blueprints) below.
    * "Allowed blueprint" - Select the blueprint that should be embeddable in this area. This field is only active if you've checked the box for "Accepts only a blueprint".

## Delete Blueprint

:::info

Deleting a blueprint is only possible via the API at the moment.

:::

## Embeddable Blueprints
Imagine you wanted to show an announcement banner on all pages of your website. Instead of adding the component to every experience individually, you can use embeddable blueprints to make this easier.

Follow these steps to set up and use an embeddable blueprint:

1. Create a new blueprint and mark it as "embeddable" [see above](#create-blueprint).
    1. Add one or more placement areas to it and add the allowed component types.
    2. Make sure your codebase is also updated with the new blueprint.
2. Update the (parent) blueprint that you want to embed something into.
    1. Add a new placement area to your blueprint.
    2. Instead of selecting component types, check the box for "Accepts only a blueprint" and select the blueprint you created in step 1.
    3. As before, make sure your codebase is updated with the new placement area.
3. Create a new experience and select your "embeddable" blueprint type. For our example above, you'd select the "Announcement" blueprint.
    1. Compose as usual and publish your experience.
    2. Go to any published experience that uses the parent blueprint. You should now see your embedded experience as well. It currently isn’t supported in live preview, only in the published experience.

:::info

Note that for your embeddable experience to show up everywhere, you'll have to re-publish all experiences using the blueprint that accept the embeddable blueprint.

:::

## Dynamic Content Sources
Supporting dynamic content sources allows you to select a business capability that automatically publishes an experience for each document. For example, you could create just one experience called "Blog article" and we publish individual experiences for each entry in the "Blog" business capability.
