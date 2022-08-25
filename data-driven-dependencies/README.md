# Relay and Data-Driven Dependencies

This is a reference implementation of the Relay integration with the Next.js framework

## Overview

This version contains an exploration of a few advanced features used in Relay:

- Data-Driven Dependencies: API, designed to load the code based on the data availability:
  - GraphQL Server `js` field
  - Client directive `@module`
  - Relay MatchContainer - React component responsible for dynamic loading and rendering Relay components.
- Server Rendering with Next.js and Query Preloading.

Please note, that this is just an example, that demonstrates how various pieces are connected together. The actual implementation on the production-ready GraphQL server and the implementation of module loading on the client may need more attention.

## How Data-Driven Dependencies work:

GraphQL types that need a special render strategy on the client that is not always required for the initial loa (or may not be loaded at all), can be excluded from the initial JS bundle. Later these modules (React Component and Relay artifact for data processing) can be loaded one the server determines that a type is about to be rendered.

### What’s needed on the GraphQL Schema

- Type or Interface that have `js(module: String!, id: String): JSDependency `
- Scalar Type `JSDependency`

On the client (Relay)

- Environment and Store has to have `operationLoader` - and object with two methods `get` and `load` that return a JS module or React Component.
- Network Layer able to process `extensions` field that contains the list of required modules to render/process the data in the response.

### Server and Client Integration

- Relay compiler replaces @module calls with `js` field selections on fragment spread types
- On the server, `js` field resolvers collecting the list of requested JS modules from the client, and send them in the `extensions` field once the response is completed
- Relay’s network layer initiates loading of requested JS modules, once Relay 3D ($normalization) artifacts are downloaded the `graphql` response for these fragments are normalized to the store
- Relay MatchContainer renders the requested @module component with the data for the 3D fragment.

### Run the example

Run the project

```bash
npm run dev
# or
yarn dev
```
