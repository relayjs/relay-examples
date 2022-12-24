// Fake Database
const nodes = [
  {
    __typename: 'Person',
    id: '1',
    name: 'Chris P. Bacon',
    profilePicture: {
      url: "/assets/chris.p.bacon.png",
    },
    location: {
      id: '10',
      name: 'Poultropolis',
    }
  },
  {
    __typename: 'Story',
    id: '2',
    category: 'ALL',
    title: 'Local Yak Named Yak of the Year',
    summary: "The annual Yak of the Year awards ceremony took place last night, and this year's winner is none other than Max, a beloved yak from the small town of Millville. Max, who is known for his friendly personality and hardworking nature, beat out stiff competition from other yaks in the region to take home the coveted title.\n \nAccording to the judges, Max stood out due to his exceptional contributions to the community. He has been used as a pack animal to help transport goods to and from the town's market, and has also been a reliable source of milk and wool for local farmers. In addition, Max has become something of a local celebrity, often posing for photos with tourists and participating in community events.",
    authorID: '7',
    createdAt: '2020-01-01T00:00:00.000Z',
    attachments: [{
      url: "/assets/yak.png",
    }],
    thumbnail: {
      url: "/assets/yak.png",
    },
    comments: [
      {
        id: "comment1",
        text: "So proud of our local yak",
      },
      {
        id: "comment2",
        text: "I've been waiting my whole life for this moment",
      },
      {
        id: "comment3",
        text: "What's a yak???",
      },
      {
        id: "comment4",
        text: "We used to keep yaks in the old country",
      },
    ],
  },
  {
    __typename: 'Story',
    id: '3',
    category: 'EDUCATION',
    title: 'Why did the chicken cross the road? To get to the other side!',
    summary: "Chickens are curious animals and will often explore their surroundings, including crossing roads if the opportunity arises. It is important to note that chickens are intelligent and adaptable animals, and the specific reasons for any given chicken crossing the road may vary depending on the individual and its circumstances.",
    authorID: '1',
    createdAt: '2020-01-01T00:00:00.000Z',
    attachments: [{
      url: "/assets/chicken.png",
    }],
    thumbnail: {
      url: "/assets/chicken.png",
    },
    comments: [],
  },
  {
    __typename: 'Story',
    id: '4',
    category: 'NEWS',
    title: 'New Hedgehog Species Discovered',
    summary: "Breaking news! Scientists have just announced the discovery of a new species of hedgehog, and you won't believe what makes this species unique.\n \n     According to the researchers, the new hedgehogs, which have been named 'sparklehogs,' are distinguished by their ability to produce rainbow-colored sparks from their spikes when they are feeling threatened.\n     \n     But that's not all! The sparklehogs have also been observed using their sparkling spikes to communicate with one another, creating dazzling light shows in the process.\n     \n     'We've never seen anything like it,' said lead researcher Dr. Maria Hernandez. 'These hedgehogs are truly one of a kind.'",
    authorID: '6',
    createdAt: '2020-01-01T00:00:00.000Z',
    attachments: [{
      url: "/assets/hedgehog.png",
    }],
    thumbnail: {
      url: "/assets/hedgehog.png",
    },
    comments: [],
  },
  {
    __typename: 'Story',
    id: '5',
    category: 'COOKING',
    title: 'Onion Soup Recipe',
    summary: "I am so excited to share with you my all-time favorite recipe for French onion soup. I can't even begin to tell you how many times I've made this dish for my family and friends, and it never fails to impress.\n\n As a self-proclaimed wine mom, I always love finding new and creative ways to incorporate my favorite vintages into my cooking. And let me tell you, the dry white wine in this recipe really takes the flavor of the onions to the next level. Trust me, it's a game changer.\n \n But don't just take my word for it – give this recipe a try for yourself and see how it becomes a new staple in your household. Not only is it delicious, but it's also the perfect comfort food for those cold winter nights.\n \n So grab your wine glasses and let's get cooking!",
    authorID: '1',
    createdAt: '2020-01-01T00:00:00.000Z',
    attachments: [{
      url: "/assets/recipe.png",
    }],
    thumbnail: {
      url: "/assets/recipe.png",
    },
    comments: [],
  },
  {
    __typename: 'Organization',
    id: '6',
    name: 'Gazelle Gazette',
    profilePicture: {
      url: "/assets/chris.p.bacon.png",
    },
    organizationKind: 'JOURNALISTIC',
  },
  {
    __typename: 'Organization',
    id: '7',
    name: 'Baller Bos Board',
    profilePicture: {
      url: "/assets/chris.p.bacon.png",
    },
    organizationKind: 'NONPROFIT',
  },
  {
    __typename: 'Person',
    id: '8',
    name: 'Suzie Queue',
    profilePicture: {
      url: "/assets/chris.p.bacon.png",
    },
    location: {
      id: '11',
      name: 'Venice',
    }
  },
  {
    __typename: 'Person',
    id: '9',
    name: 'Artie G.',
    profilePicture: {
      url: "/assets/chris.p.bacon.png",
    },
    location: {
      id: '12',
      name: 'New York',
    }
  },
  {
    __typename: 'Person',
    id: '13',
    name: 'Alexei Fyodorovich Karamazov',
    profilePicture: {
      url: "/assets/chris.p.bacon.png",
    },
    location: {
      id: '14',
      name: 'Among Us',
    }
  },
];

export function nodeResolver({id}) {
  return nodes.find(node => node.id === id);
}

export function topStoryResolver(_, {category}) {
  if(typeof category === 'string' && category !== 'ALL') {
    return nodes.filter(node => node.__typename === 'Story' && node.category === category)[0];
  } else {
    return nodes.filter(node => node.__typename === 'Story')[0];
  }
}

export function storyPosterResolver(story) {
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

export function contactsResolver(_, {search}) {
  const persons = nodes.filter(node => node.__typename === 'Person');
  if (search == null || search == '') {
    return persons;
  } else {
    return persons.filter(person =>
      person.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  }
}

export function storyCommentsResolver(story, {first, after: afterStr}) {
  const count = first ?? Infinity;
  const after = parseInt(afterStr, 10) || 0;
  const next = count + after;
  const comments = story.comments;
  return {
    pageInfo: {
      hasNextPage: comments.length >= next,
      lastCursor: '' + next,
    },
    edges: comments.slice(after, next).map(comment => ({
      node: comment,
    })),
  };
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