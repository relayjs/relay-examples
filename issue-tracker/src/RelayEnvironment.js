import { Environment, Network, RecordSource, Store } from 'relay-runtime';

async function fetchRelay(params, variables, _cacheConfig) {
  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `bearer ${process.env.REACT_APP_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.json();
  if (Array.isArray(json.errors)) {
    throw new Error('Error fetching GraphQL query');
  }
  return json;
}

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource(), {
    gcReleaseBufferSize: 10,
  }),
});