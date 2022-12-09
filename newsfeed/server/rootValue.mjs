
export const rootValue = {
  viewer: () => {
    return {
      actor: {
        __typename: 'User',
        id: '1',
        name: 'Alice',
      }
    };
  },
  node: () => {
    // TODO: implement
    return null
  },
};
