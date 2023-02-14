---
sidebar_position: 3
---

# Connect to a new provider

In this guide, you'll learn how to add a new provider to Atama.

Providers connect Atama to source systems via APIs and make their source capabilities (e.g. content, data, actions) available for Composer to use. Connecting to a provider that we already have in our Composer library is very easy.

:::info

Please [contact us](https://www.atama.co/contact-us) if you want to connect to a service that we don't have an integration with yet. We're always looking to expand our library and are happy to assist you.

:::

## Process

1. Make sure you have access to the source system you want to connect with. We may ask you for username/password or API information.
2. Register the new provider in Composer Studio.
3. Map one or more of the providers's capabilities to a business capability. This step is optional but without it, you will get limited value out of the newly connected provider.

## Connect to a new provider

Follow the steps below to add your new provider.

For the purpose of this guide, we'll connect to Contentful.

1. Navigate to the "organization" view.
2. Select "Providers" from the main navigation.
3. Click the "+ Register a new provider" button.
4. Fill out the form:
    1. "Name" - You can use the name differentiate instances of the same type. For example, if you have a *Marketing* and a *Intranet* Contentful space, you can label it accordingly. **Use "Contentful Marketing" for our example scenario.**
    2. "Description" - Optional field for additional meta information.
    3. "Visit URL" - Provide the URL of the service where business users usually log into. This is helpful if users want to see all the source data in its origin outside of Atama. **For our example, you can use `https://app.contentful.com/spaces/abc123`** where `abc123` at the end should be your Contentful space identifier.
    4. "Provider" - Select the provider. **Select Contentful from the list.**
5. Once you have the provider selected, some extra form fields will appear. Depending on the provider, you may need to go through an OAuth authentication flow or provide us with API credentials.
6. Click "Register" to add the new provider.
7. You can confirm that the connection worked by checking that there are source capabilities listed on the provider page.

## Add a mapping for your new provider

In order for you to use one of your provider's capabilities, you need to assign it to a business capability. The business capability is a layer of abstraction to avoid direct point-to-point integrations with your provider. This will help you with maintenance down the road.

1. Navigate to the "organization" view.
2. Select "Capabilities" from the main navigation.
3. Click on the business capability that you would like to update.
4. Click the "+ Add mapping" button under the "Mappings" headline.
    1. This should open the "Select a Source Capability" overlay.
    2. Use the search and filter to find the source capability that you want to map.
    3. This should open up a separate mapping page.
5. Write your mapping using JSONata notation.
    1. You can use the source (provider) and target (business capability) schemas and graphs to help you with the mapping exercise.
    2. Please refer to our [JSONata reference doc](../../reference/jsonata-reference.md) for example mappings.
6. Click "Save" when you're done.

Assuming your business capability is already used by a component, you should now be able to pull in your new provider's capabilities.
