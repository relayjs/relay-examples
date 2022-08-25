import Chance from 'chance';

const chance = new Chance();

let blogPostId = 0;
function getID() {
  return ++blogPostId;
}

const blogPosts = [
  {
    id: getID(),
    __typename: 'BlogPost',
    content: chance.paragraph({sentences: 2}),
    title: chance.sentence({words: 5}),
    createdAt: Date.now(),
  },
  {
    id: getID(),
    __typename: 'BlogPost',
    content: chance.paragraph({sentences: 2}),
    title: chance.sentence({words: 5}),
    createdAt: Date.now(),
  },
];

function generateBlogPost() {
  const newPost = {
    id: getID(),
    __typename: chance.pickone(['BlogPost', 'FancyBlogPost']),
    content: chance.paragraph({sentences: 2}),
    title: chance.sentence({words: 5}),
    createdAt: Date.now(),
  };
  blogPosts.push(newPost);
  return newPost;
}

export function findBlogPost(id) {
  const post = blogPosts.find((post) => post.id == id);
  return blogPosts.find((post) => post.id == id);
  return post ?  ({
    content: post
  }) : null;
}

// Fake implementation of the `allBlogPosts` connection
export function allBlogPosts({after, _first}) {
  const blogPostsList = after ? [generateBlogPost()] : blogPosts;
  return {
    edges: blogPostsList.map((blogPost) => ({
      __typename: 'BlogPostConnectionEdge',
      cursor: `c-${blogPost.id}`,
      node: {
        content: blogPost
      },
    })),
    pageInfo: {
      startCursor: `c-${blogPostsList[0].id}`,
      endCursor: `c-${blogPostsList[blogPostsList.length - 1].id}`,
      hasNextPage: true,
      hasPrevPage: false,
    },
  };
}
