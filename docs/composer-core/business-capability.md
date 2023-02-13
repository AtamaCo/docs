---
sidebar_position: 5
---

# Business Capability
Atama introduces a layer of abstraction in order to avoid point-to-point integrations and make lifecycle management easier for large systems. One of those abstractions are business capabilities. They serve as a normalized schema for APIs (i.e. source capabilities) provided by 3rd party services (i.e. providers).

You’ll need to have at least one provider and an associated business capability before you can get Atama running end-to-end.

## Show Business Capabilities
To see all business capabilities, navigate to the "Capabilities" page from the organization context. You can narrow down the list of records by searching and filtering.

## Create Business Capability
1. Navigate to the "organization" view.
2. Select "Capabilities" from the main navigation.
3. Click "+ Create" in the upper right hand corner.
4. Fill out all the required form fields:
    1. "Name" - Used to identify the business capability
    2. "Description" - Optional but recommended to provide more details about what the business capability is all about.
    3. "Type of business capability" - Data or Action.
        1. "Data" - Examples: `product`, `list of blog posts`
        2. "Action" - Examples: `add to cart`, `submit form`
    4. "Source capability" - Select the first source capability that this business capability should be mapped to. This will be used as your starting point to define what the business capability is. You can always add additional mappings later ([see below](#add-provider-mapping)) as well as edit the schema of the bisiness capability.
5. Click "Create" when you're ready.

Once the business capability is created, here are some next steps that may make sense for you:

* Change the business capability schema ([see below](#edit-schema)) - This is recommended because business capabilities should represent models that make sense for the business and not map 1:1 to source systems.
* [Map the business capability to a component type](../composer-studio/authoring-guides/component/index.md#example-mapping)
* Add additional providers to the business capability

## Edit Business Capability

### Edit name
To edit the business capability name, click on the "Rename" button right next to the business capability title. Make your changes and click "Confirm".

The change should take effect immediately on this interface but indexed data will need to be re-indexed for the change to take effect.

### Edit description
To edit the business capability description, click on the "Edit" button below the existing description. Make your changes and click "Confirm".

The text field supports markdown formatting for headlines, lists, etc.

### Edit schema

:::info

Coming soon.

:::

## Add Provider Mapping

1. Open the business capability that you want to add the provider to.
2. Under "Mappings" click on "+ Add mapping"
3. From the drawer that appears, select the source capability that you want to add. You can search and filter to narrow down the results. If you're missing a source capability, check the [provider](../composer-core/providers/README.md) or add a new one.
4. This opens up the mapping screen (see instructions below).

## Edit Provider Mapping

:::info

Coming soon.

:::

See our [JSONata reference](../reference/jsonata-reference.md) for examples.

## Delete Provider Mapping

1. Open the business capability that you want to remove the provider mapping from.
2. Under "Mappings" click on the mapping you wish to delete
3. Use the menu on the top-right and click on "Delete"
