/**
 * Basic GraphQL schema for the Newsfeed app.
 */

import { contactsResolver, storyPosterResolver, newsfeedResolver, topStoryResolver, storyCommentsResolver } from './resolvers.mjs';

import {
  GraphQLBoolean,
  GraphQLEnumType,
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

// const DateTimeType = new GraphQLScalarType({
//   name: 'DateTime',
//   serialize: (value) => value,
// });
// FIXME temporary until can figure out customScalarTypes config
const DateTimeType = GraphQLString;

const NodeInterface = new GraphQLInterfaceType({
  name: 'Node',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
  }
});

const CategoryType = new GraphQLEnumType({
  name: 'Category',
  values: {
    ALL: { value: "ALL" },
    EDUCATION: { value: "EDUCATION" },
    NEWS: { value: "NEWS" },
    COOKING: { value: "COOKING" },
  }
});

const OrganizationKindType = new GraphQLEnumType({
  name: 'OrganizationKind',
  values: {
    COMMERCIAL: { value: "COMMERCIAL" },
    NONPROFIT: { value: "NONPROFIT" },
    GOVERNMENT: { value: "GOVERNMENT" },
    JOURNALISTIC: { value: "JOURNALISTIC" },
  }
});


const ImageType = new GraphQLObjectType({
  name: 'Image',
  fields: {
    url: {type: new GraphQLNonNull(GraphQLString)},
  },
});

const LocationType = new GraphQLObjectType({
  name: 'Location',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: new GraphQLNonNull(GraphQLString)},
  },
});

const ActorInterface = new GraphQLInterfaceType({
  name: 'Actor',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    profilePicture: {type: ImageType},
  }
});

const PersonType = new GraphQLObjectType({
  name: 'Person',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    email: {type: GraphQLString},
    profilePicture: {type: ImageType},
    location: {type: LocationType},
  },
  interfaces: [NodeInterface, ActorInterface],
});

const OrganizationType = new GraphQLObjectType({
  name: 'Organization',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    name: {type: GraphQLString},
    profilePicture: {type: ImageType},
    organizationKind: {type: OrganizationKindType},
  },
  interfaces: [NodeInterface, ActorInterface],
});

const CommentType = new GraphQLObjectType({
  name: 'Comment',
  fields: {
    id: {type: new GraphQLNonNull(GraphQLID)},
    text: {type: GraphQLString},
  },
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

const CommentsConnectionEdgeType = new GraphQLObjectType({
  name: 'CommentsConnectionEdge',
  fields: {
    node: {
      type: CommentType,
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
    lastCursor: {type: GraphQLString},
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

const CommentsConnectionType = new GraphQLObjectType({
  name: 'CommentsConnection',
  fields: {
    edges: {
      type: new GraphQLList(CommentsConnectionEdgeType),
    },
    pageInfo: {
      type: PageInfoType,
    },
  },
});

const StoryType = new GraphQLObjectType({
  name: 'Story',
  fields: {
    createdAt: {type: new GraphQLNonNull(DateTimeType)},
    id: {type: new GraphQLNonNull(GraphQLID)},
    category: {type: CategoryType},
    title: {type: new GraphQLNonNull(GraphQLString)},
    summary: {type: GraphQLString},
    updatedAt: {type: DateTimeType},
    attachments: {type: new GraphQLList(ImageType)},
    poster: {type: new GraphQLNonNull(ActorInterface), resolve: storyPosterResolver},
    thumbnail: {type: ImageType},
    comments: {
      args: {
        first: {
          type: GraphQLInt,
        },
        after: {
          type: GraphQLString,
        },
      },
      type: CommentsConnectionType,
      resolve: storyCommentsResolver,
    },
  },
  interfaces: [NodeInterface],
});

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    actor: {
      type: ActorInterface,
    },
    contacts: {
      args: {
        search: {
          type: GraphQLString,
        }
      },
      type: new GraphQLList(ActorInterface),
      resolve: contactsResolver,
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
    topStory: {
      type: StoryType,
      resolve: topStoryResolver,
      args: {
        category: {type: CategoryType}
      }
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  types: [PersonType, OrganizationType, StoryType],
});