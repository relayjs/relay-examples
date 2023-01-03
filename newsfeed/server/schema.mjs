/**
 * Basic GraphQL schema for the Newsfeed app.
 * You must run `yarn print-schema` in `server/` and then restart `npm run dev`
 * after modifying this file. This regenerates the GraphQL schema.
 */

import {
  contactsResolver,
  storyPosterResolver,
  newsfeedStoriesResolver,
  topStoryResolver,
  topStoriesResolver,
  storyCommentsResolver,
  resolveLikeStoryMutation,
  resolvePostStoryCommentMutation,
  resolveImageURL,
} from "./resolvers.mjs";

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
  GraphQLInterfaceType,
  GraphQLDeferDirective,
  GraphQLStreamDirective,
  specifiedDirectives,
} from "graphql";

// const DateTimeType = new GraphQLScalarType({
//   name: 'DateTime',
//   serialize: (value) => value,
// });
// FIXME temporary until can figure out customScalarTypes config
const DateTimeType = GraphQLString;

const NodeInterface = new GraphQLInterfaceType({
  name: "Node",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
});

const CategoryType = new GraphQLEnumType({
  name: "Category",
  values: {
    ALL: { value: "ALL" },
    EDUCATION: { value: "EDUCATION" },
    NEWS: { value: "NEWS" },
    COOKING: { value: "COOKING" },
  },
});

const OrganizationKindType = new GraphQLEnumType({
  name: "OrganizationKind",
  values: {
    COMMERCIAL: { value: "COMMERCIAL" },
    NONPROFIT: { value: "NONPROFIT" },
    GOVERNMENT: { value: "GOVERNMENT" },
    JOURNALISTIC: { value: "JOURNALISTIC" },
  },
});

const ImageType = new GraphQLObjectType({
  name: "Image",
  fields: {
    url: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: resolveImageURL,
      args: {
        height: { type: GraphQLInt },
        width: { type: GraphQLInt },
      },
    },
    altText: { type: GraphQLString },
  },
});

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
  },
});

const ActorInterface = new GraphQLInterfaceType({
  name: "Actor",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    profilePicture: { type: ImageType },
    joined: { type: DateTimeType },
  },
});

const PersonType = new GraphQLObjectType({
  name: "Person",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    profilePicture: { type: ImageType },
    joined: { type: DateTimeType },
    location: { type: LocationType },
  },
  interfaces: [NodeInterface, ActorInterface],
});

const OrganizationType = new GraphQLObjectType({
  name: "Organization",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    profilePicture: { type: ImageType },
    joined: { type: DateTimeType },
    organizationKind: { type: OrganizationKindType },
  },
  interfaces: [NodeInterface, ActorInterface],
});

const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    text: { type: GraphQLString },
  },
});

const PageInfoType = new GraphQLObjectType({
  name: "PageInfo",
  fields: {
    startCursor: { type: GraphQLString },
    endCursor: { type: GraphQLString },
    lastCursor: { type: GraphQLString },
    hasNextPage: { type: GraphQLBoolean },
    hasPreviousPage: { type: GraphQLBoolean },
  },
});

function createConnectionType(name, nodeType) {
  const edgeType = new GraphQLObjectType({
    name: name + "ConnectionEdge",
    fields: {
      node: {
        type: nodeType,
      },
      cursor: {
        type: GraphQLString,
      },
    },
  });

  const connectionType = new GraphQLObjectType({
    name: name + "Connection",
    fields: {
      edges: {
        type: new GraphQLList(edgeType),
      },
      pageInfo: {
        type: PageInfoType,
      },
    },
  });

  return [connectionType, edgeType];
}

const [CommentsConnectionType, CommentsConnectionEdgeType] =
  createConnectionType("Comments", CommentType);

const StoryType = new GraphQLObjectType({
  name: "Story",
  fields: {
    createdAt: { type: new GraphQLNonNull(DateTimeType) },
    id: { type: new GraphQLNonNull(GraphQLID) },
    category: { type: CategoryType },
    title: { type: new GraphQLNonNull(GraphQLString) },
    summary: { type: GraphQLString },
    updatedAt: { type: DateTimeType },
    attachments: { type: new GraphQLList(ImageType) },
    poster: {
      type: new GraphQLNonNull(ActorInterface),
      resolve: storyPosterResolver,
    },
    thumbnail: { type: ImageType },
    likeCount: { type: GraphQLInt },
    doesViewerLike: { type: GraphQLBoolean },
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

const [StoriesConnectionType, StoriesConnectionEdgeType] = createConnectionType(
  "Stories",
  StoryType
);

const ViewerType = new GraphQLObjectType({
  name: "Viewer",
  fields: {
    actor: {
      type: ActorInterface,
    },
    contacts: {
      args: {
        search: {
          type: GraphQLString,
        },
      },
      type: new GraphQLList(ActorInterface),
      resolve: contactsResolver,
    },
    newsfeedStories: {
      args: {
        first: { type: GraphQLInt },
        after: { type: GraphQLString },
        category: { type: CategoryType },
      },
      type: StoriesConnectionType,
      resolve: newsfeedStoriesResolver,
    },
  },
});

const QueryType = new GraphQLObjectType({
  name: "Query",
  fields: {
    viewer: { type: ViewerType },
    node: {
      type: NodeInterface,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
    },
    topStory: {
      type: StoryType,
      resolve: topStoryResolver,
      args: {
        category: { type: CategoryType },
      },
    },
    topStories: {
      type: new GraphQLList(StoryType),
      resolve: topStoriesResolver,
    },
  },
});

const StoryMutationResponseType = new GraphQLObjectType({
  name: "StoryMutationResponse",
  fields: {
    story: { type: StoryType },
  },
});

const StoryCommentMutationResponseType = new GraphQLObjectType({
  name: "StoryCommentMutationResponse",
  fields: {
    story: { type: StoryType },
    commentEdge: { type: CommentsConnectionEdgeType },
  },
});

const MutationType = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    likeStory: {
      type: StoryMutationResponseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        doesLike: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve: resolveLikeStoryMutation,
    },
    postStoryComment: {
      type: StoryCommentMutationResponseType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        text: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: resolvePostStoryCommentMutation,
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
  types: [PersonType, OrganizationType, StoryType],
  directives: [
    ...specifiedDirectives,
    GraphQLDeferDirective,
    GraphQLStreamDirective,
  ],
});
