/**
 * Basic GraphQL schema for the Newsfeed app.
 */

import { storyUserResolver, newsfeedResolver } from './resolvers.mjs';

import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
  GraphQLInterfaceType
} from 'graphql';

const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  serialize: (value) => value,
});

const NodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
  }
});

const ActorInterface = new GraphQLInterfaceType({
  name: 'Actor',
  fields: {
    name: {type: GraphQLString},
  }
});

const Image = new GraphQLObjectType({
  name: 'Image',
  fields: {
    url: {type: new GraphQLNonNull(GraphQLString)},
  },
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    profilePicture: {type: Image},
  },
  interfaces: [NodeInterface, ActorInterface],
});

const StoryType = new GraphQLObjectType({
  name: 'Story',
  fields: {
    createdAt: {type: new GraphQLNonNull(DateTimeType)},
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    summary: {type: GraphQLString},
    updatedAt: {type: DateTimeType},
    attachments: {type: new GraphQLList(Image)},
    author: {type: new GraphQLNonNull(ActorInterface), resolve: storyUserResolver},
  },
  interfaces: [NodeInterface],
});


const ConnectionEdgeType = new GraphQLObjectType({
  name: 'ConnectionEdge',
  fields: {
    node: {
      type: NodeInterface,
    },
    cursor: {
      type: GraphQLString,
    },
  },
});

const PageInfoType = new GraphQLObjectType({
  name: 'PageInfo',
  fields: {
    startCursor: {type: GraphQLString},
    endCursor: {type: GraphQLString},
    hasNextPage: {type: GraphQLBoolean},
    hasPreviousPage: {type: GraphQLBoolean},
  },
});

const ConnectionType = new GraphQLObjectType({
  name: 'Connection',
  fields: {
    edges: {
      type: new GraphQLList(ConnectionEdgeType),
    },
    pageInfo: {
      type: PageInfoType,
    },
  },
});

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    actor: {
      type: ActorInterface,
    },
    newsfeed: {
      args: {
        first: {
          type: GraphQLInt,
        },
        after: {
          type: GraphQLString,
        },
      },
      type: ConnectionType,
      resolve: newsfeedResolver,
    },
  },
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {type: ViewerType},
    node: {
      type: NodeInterface,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  types: [UserType, StoryType],
});
