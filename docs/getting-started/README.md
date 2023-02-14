---
sidebar_position: 1
---

# Getting Started

Atama Composer is a composable orchestration platform.

* For marketers and business users:
  * Create campaigns **across all your channels** (web, mobile, email, signage, etc.) from a single interface
  * **Preview experiences** live without the need for a developer
* For developers:
  * A **composable architecture** that you can use today
  * Integrate with 3rd party services using **clear patterns** and **best practices**
  * Use the latest MACH, Jamstack, [enter buzzword] technology without being hampered by legacy systems


## Overview

Here's a quick rundown of how Atama Composer works.

1. **[Providers](../composer-core/providers/README.md)** integrate with your **existing MarTech services** to make their capabilities (content, commerce, search, etc.) available to Composer.
2. You then have the opportunity to **normalize** the raw "source capabilities" into **[business capabilities](../composer-core/business-capability.md)** that work better for your specific use cases.
    1. For example, a service may have a product data model that doesn't quite work for your business.
    2. With Atama's approach to business capabilities, you have a chance to define your own and then associate any number of 3rd party services to it that provide the capability.
    3. This is an optional step but will make your maintenance easier in the long run.
3. Once your business capabilities are defined, they're mapped to **[components](../composer-studio/authoring-guides/component/index.md)**. This connects the abstract data or functionality to a tangible element that can be used on an output channel you have configured.
4. With all the configuration completed, your business users can start creating **[experiences](../composer-studio/authoring-guides/experience/index.md)** in Composer Studio. You can think of an experience like a **marketing campaign that spans multiple channels**. One experience can be a single page on a website, or cover a mobile app, landing page, email and even billboard.


### What is Atama Composer?

Atama Composer consists of three products that work in tandem:

**Core** — Atama's composable architecture. To put it simply, it deals with getting data in and out of Composer.

**Studio** — Business-friendly interface where marketers can create experiences based on the capabilities defined in Core.

**Lens** — Displays useful analytics about your composable ecosystem.


## Getting Started

Here are some steps you can follow to get up to speed quickly:

1. Go through our [quickstart guide](../getting-started/quickstart/index.md)
2. Get familiar with the Atama [terminology](../reference/terminology.md)
3. Review the [authoring flow](../getting-started/authoring-flow.md)

