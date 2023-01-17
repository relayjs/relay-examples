import * as React from "react";
import { GraphiQL as GraphQLPlayground, GraphiQLProviderProps } from "graphiql";
import "graphiql/graphiql.css";

const defaultQuery = `
query MyQuery {
  topStory(category: ALL) {
    id
    title
    likeCount
    createdAt
  }
}
`;

const fetcher: GraphiQLProviderProps["fetcher"] = async (
  graphQLParams,
  options
) => {
  const data = await fetch("/api", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: JSON.stringify(graphQLParams),
  });
  return data.json().catch(() => data.text());
};

export default function GraphiQL() {
  const [query, setQuery] = React.useState("");

  return (
    <GraphQLPlayground
      query={query || defaultQuery.trim()}
      onEditQuery={setQuery}
      fetcher={fetcher}
    />
  );
}
