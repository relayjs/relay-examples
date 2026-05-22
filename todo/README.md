# Relay TodoMVC

## Prerequisites

- Node.js 22+ (for TypeScript execution)
- Yarn

## Installation

```
nvm use
yarn
```

## Running

Generate the schema and Relay artifacts:

```
yarn grats
yarn relay
```

Start the GraphQL server and Vite dev server:

```
yarn dev
```

The app will be available at http://localhost:5173.

## Architecture

- **Schema**: Defined using [Grats](https://grats.capt.dev) annotations in `data/` — TypeScript types are the source of truth
- **Server**: [GraphQL Yoga](https://the-guild.dev/graphql/yoga-server) running on port 3000
- **Client**: React + [Relay](https://relay.dev) + Vite

## CI

```
yarn ci
```

Runs Grats, Relay compiler, TypeScript, and Vite build — verifying that all generated files are up to date.
