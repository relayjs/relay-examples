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

export function getBlogPosts() {
  return blogPosts;
}

export function createBlogPost() {
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
  return blogPosts.find((post) => post.id == id);
}
