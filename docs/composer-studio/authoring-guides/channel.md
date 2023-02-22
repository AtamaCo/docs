---
sidebar_position: 3
---

# Channel
A channel is specific to a workspace. Examples of channels include websites, native mobile apps, emails, signage displays/screens, and internet of things (IoT) applications. Your organization may have one or more of these channels depending on your business needs.

## Show Channels
To see all channels, navigate to the "Channels" page from the workspace context.

## Create Channel
1. Navigate to [Composer Studio](https://composer.atama.app/studio) and select a workspace.
2. Select "Channels" from the main navigation.
3. Click "+ Create" in the upper right hand corner.
4. Fill out all the required form fields:
    1. "Name" - Used to identify the channel
    2. "Description" - Optional but recommended to provide more details about what the channel is all about.
    3. "Type" - Select what kind of channel you want to create. This helps inform what kind of preview Atama should render.
    4. "Preview URL" - This URL is used to render the preview in the experience editor.
5. Click "Create" when you're ready.
6. With the channel created, you will likely also need to configure a publisher (see the [instructions below](#edit-publisher)).

At this point, you can use the channel in [blueprints](./blueprint/index.md) and then create experiences for it.

:::info

At the moment we only support web and email channels. Our channel pattern is very flexible and we're planning to add more in the future. If you have a specific need, please [contact us](https://www.atama.co/contact-us).

:::

## Edit Channel
1. Navigate to [Composer Studio](https://composer.atama.app/studio) and select a workspace.
2. Select "Channels" from the main navigation.
3. Click on the name of the channel that you want to edit.
4. Make your changes and click "Save". Refer to the descriptions above if you're curious about what each field is used for.

The "Edit Channel" screen is also used as your entry point for [managing the publisher](#publisher) associated with the channel.

## Delete Channel

:::info

Deleting a channel is only possible through the API right now. Please [contact us](https://www.atama.co/contact-us).

:::

## Publisher
Publishers are associated with channels and make sure that the data gets to the channel in the right format.

### Create Publisher
1. Navigate to [Composer Studio](https://composer.atama.app/studio) and select a workspace.
2. Select "Channels" from the main navigation.
3. Click on the name of the channel for which you want to configure the publisher.
4. On the right hand side, click on "Create publisher config"
5. Fill out all the required form fields:
    1. "Select publisher type" - The type that you select here needs to work with the type of channel this is for.
    2. "Supported publishing features" - This defines where you can publish experiences to. At least 'Production' should be selected in most cases. How "Preview" is handled depends on the channel and publisher. For example, for the web channel it assumes that you have a clone of your production site with a slightly different config (see `config.environment` in [FetcherAtama](../developer-guides/cx-framework/fetcher/fetcher-atama.md#api)).
    3. "Supported unpublishing features" - This defines where you can unpublish experiences from. Note that not all channels support unpublishing (e.g. email, SMS, etc.).
    4. "Publisher configuration" - Depending on the type of publisher, you'll need to fill out one or more additional fields to configure the publisher. This may include things like API keys or publish domains.
6. Click "Create" when you're ready.

:::info

At the moment we only support publishers for web and SendGrid. Our publisher pattern is very flexible and we're planning to add more in the future. If you have a specific need, please [contact us](https://www.atama.co/contact-us).

:::

### Edit Publisher
1. Navigate to [Composer Studio](https://composer.atama.app/studio) and select a workspace.
2. Select "Channels" from the main navigation.
3. Click on the name of the channel for which you want to configure the publisher.
4. On the right hand side, click on "Edit publisher"
5. Make your changes and click "Save". Refer to the descriptions above if you're curious about what each field is used for.
    1. Please note that for security reasons we do not pre-fill the form with your current values because they may contain sensitive information like API keys.
