// Fake Database
const nodes = [
  {
    __typename: 'User',
    id: '1',
    name: 'Alice',
  },
  {
    __typename: 'Story',
    id: '2',
    title: 'GraphQL',
    summary: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
    authorID: '1',
    createdAt: '2020-01-01T00:00:00.000Z',
  }
];

export function nodeResolver({id}) {
  return nodes.find(node => node.id === id);
}

export function storyUserResolver(story) {
  return nodeResolver({id: story.authorID})
}

export function newsfeedResolver() {
  const edges = nodes.filter(node => node.__typename === 'Story');
  return {
    edges: edges.map(node => ({node, cursor: node.id})),
    pageInfo: {
      startCursor: edges[0]?.node?.id,
      endCursor: edges[edges.length - 1]?.node?.id,
      hasNextPage: false,
      hasPreviousPage: false,
    }
  }
}

export const rootValue = {
  viewer: () => {
    return {
      actor: nodes.find(node => node.id === '1'),
    };
  },
  node: (args) => {
    return nodeResolver(args)
  },
};
