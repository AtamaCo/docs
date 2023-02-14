---
sidebar_position: 2
---

# Terminology

### [Blueprint](../composer-studio/authoring-guides/blueprint/index.md)
A blueprint defines the layout of the experience and what areas (i.e. Placements) within are editable.

### [Business Capability](../composer-core/business-capability.md)
Atama introduces a couple layers of abstraction in order to avoid point-to-point integrations and make lifecycle management easier for large systems. One of those abstractions are business capabilities. They serve as a normalized schema for APIs (i.e. source capabilities) provided by 3rd party services (i.e. providers).

### [Business Capability Bundle](../composer-core/business-capability-bundle.md)
A business capability bundle logically groups one or more business capabilities. For example, you may want to group all your marketing capabilities into one bundle and your commerce ones in a separate one.

### [Channel](../composer-studio/authoring-guides/channel.md)
Examples: web, mobile, email, signage, IoT.

### [Component](../composer-studio/authoring-guides/component/index.md)
A component is a block within an experience for a specific channel (web, email, etc.). The component type defines what data the code is expecting and how business capabilities map to it.

### [Experience](../composer-studio/authoring-guides/experience/index.md)
An experience is an interaction between your organization and a user (customer, partner or employee). It can target one or more channels.

### Placement
A placement is an area within a blueprint that's been identified as being authorable. It also defines what components are allowed within it.

### [Provider](../composer-core/providers/README.md)
Providers connect Atama to source systems via APIs and make their source capabilities (e.g. content, data, actions) available for Composer to use.

### [Publisher](../composer-studio/authoring-guides/channel.md#publisher)
Publishers are associated with channels and make sure that the data gets to the channel in the right format.

### Source Capabilities
A source capability can be any type of content, data, or action that's made available to Atama via a provider.

### [Workspace](../composer-studio/authoring-guides/workspace.md)
Workspaces are used to logically separate brands, business units, or even projects. Most of the marketer's day-to-day work of creating experiences etc. happens in a workspace.
