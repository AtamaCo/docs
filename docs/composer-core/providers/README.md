---
sidebar_position: 1
---

# Providers

Atama providers are lightweight proxies or wrappers around a third party vendor's public APIs, providing a common way for Atama Composer to interact with these systems.

This allows us to decouple Composer implementation details from those of the integrated source systems. For example, the way that you'd fetch a list of blog posts from Wordpress is vastly different from how you might retrieve a product from Adobe Commerce's catalog (REST vs. GraphQL, authentication requirements, etc.). The Providers hide these complexities from the rest of the system and provide an easier method to get content from each system.

## Existing Providers

* Adobe Commerce
* Adobe Experience Manager
* Contentful
* Generic REST JSON
* WordPress

:::info

We're always looking for new services to integrate with. Please [contact us](https://www.atama.co/contact-us) if you are one of the following:

* a technology vendor that wants to integrate with Atama
* interested in working with Atama but don't see the services you use listed here yet

:::

## Connect to a new provider

1. Navigate to the "organization" view.
2. Select "Providers" from the main navigation.
3. Click the "+ Register a new provider" button.
4. Fill out the form:
    1. "Name" - You can use the name to differentiate instances of the same type. For example, if you have a *Marketing* and a *Intranet* Contentful space, you can label it accordingly.
    2. "Description" - Optional field for additional meta information.
    3. "Visit URL" - Provide the URL of the service where business users usually log into. This is helpful if users want to see all the source data in its origin outside of Atama.
    4. "Provider" - Select the provider.
5. Once you have the provider selected, some extra form fields will appear. Depending on the provider, you may need to go through an OAuth authentication flow or provide API credentials. All credentials are stored securely.

## Create a new provider

Our provider pattern is extensible so you can easily create your own and connect it to Atama.

:::info

We're working on documentation for this. If you have an urgent need, please [contact us](https://www.atama.co/contact-us).

:::
