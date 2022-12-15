// Fake Database
const nodes = [
  {
    __typename: 'User',
    id: '1',
    name: 'Chris P. Bacon',
    profilePicture: {
      url: "/assets/chris.png",
    },
  },
  {
    __typename: 'Story',
    id: '2',
    title: 'Why did the chicken cross the road? To get to the other side!',
    summary: "But let's be real, we all know the real reason the chicken crossed the road: to take a break from its busy day and enjoy the scenery on the other side. Sorry, other animals, but the chicken's gotta do what the chicken's gotta do..\n\nOk, ok, let's get even more real. The chicken didn't actually cross the road. It was just a clever disguise to avoid being cooked for dinner. Smart chicken, indeed.\n\nBut really, at the end of the day, does it even matter why the chicken crossed the road? All that matters is that it made for a hilarious dad joke that we can all enjoy. So here's to you, chicken. Keep on doing your thing.",
    authorID: '1',
    createdAt: '2020-01-01T00:00:00.000Z',
    attachments: [{
      url: "/assets/chicken.png",
    }],
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
