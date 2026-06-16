import {
  GraphQLBoolean,
  GraphQLEnumType,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLScalarType,
  GraphQLSchema,
  GraphQLString,
  GraphQLUnionType,
} from 'graphql';

import {allBlogPosts, findBlogPost} from './blogPosts';

const DateTimeType = new GraphQLScalarType({
  name: 'DateTime',
  serialize: (value) => value,
});

const JSDependencyType = new GraphQLScalarType({
  name: 'JSDependency',
  serialize: (value) => value,
});

const JSDependencyField = {
  args: {
    module: {type: new GraphQLNonNull(GraphQLString)},
    id: {type: GraphQLString},
  },
  type: new GraphQLNonNull(JSDependencyType),
  resolve: async (_: unknown, {module}: {module: string}) => {
    seenDataDrivenDependencies.add(module);
    return module;
  },
};

const seenDataDrivenDependencies = new Set<string>();
export const dataDrivenDependencies = {
  reset() {
    seenDataDrivenDependencies.clear();
  },
  getModules() {
    return Array.from(seenDataDrivenDependencies);
  },
};

const BlogPostType = new GraphQLObjectType({
  name: 'BlogPost',
  fields: {
    createdAt: {type: new GraphQLNonNull(DateTimeType)},
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    updatedAt: {type: new GraphQLNonNull(DateTimeType)},
    js: JSDependencyField,
  },
});

const FancyBlogPostType = new GraphQLObjectType({
  name: 'FancyBlogPost',
  fields: {
    createdAt: {type: new GraphQLNonNull(DateTimeType)},
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: {type: new GraphQLNonNull(GraphQLString)},
    content: {type: new GraphQLNonNull(GraphQLString)},
    updatedAt: {type: new GraphQLNonNull(DateTimeType)},
    js: JSDependencyField,
  },
});

const BlogPostUnion = new GraphQLUnionType({
  name: 'BlogPostUnion',
  types: [BlogPostType, FancyBlogPostType],
  resolveType(obj) {
    return obj.__typename === 'FancyBlogPost' ? 'FancyBlogPost' : 'BlogPost';
  },
});

const Post = new GraphQLObjectType({
  name: 'Post',
  fields: {
    content: {
      type: BlogPostUnion,
      args: {
        supported: {type: new GraphQLList(GraphQLString)},
      }
    },

  },
});

const BlogPostConnectionEdgeType = new GraphQLObjectType({
  name: 'BlogPostConnectionEdge',
  fields: {
    node: {
      type: Post,
    },
    cursor: {
      type: GraphQLString,
    },
  },
});

const BlogPostConnectionPageInfoType = new GraphQLObjectType({
  name: 'BlogPostConnectionPageInfo',
  fields: {
    startCursor: {type: GraphQLString},
    endCursor: {type: GraphQLString},
    hasNextPage: {type: GraphQLBoolean},
    hasPreviousPage: {type: GraphQLBoolean},
  },
});

const BlogPostConnectionType = new GraphQLObjectType({
  name: 'BlogPostConnection',
  fields: {
    edges: {
      type: new GraphQLList(BlogPostConnectionEdgeType),
    },
    pageInfo: {
      type: BlogPostConnectionPageInfoType,
    },
  },
});

const OrderEnum = new GraphQLEnumType({
  name: 'Order',
  values: {
    asc: {value: 'asc'},
    desc: {value: 'desc'},
  },
});

const OrderByInput = new GraphQLInputObjectType({
  name: 'OrderBy',
  fields: {
    createdAt: {
      type: OrderEnum,
    },
  },
});

const ViewerType = new GraphQLObjectType({
  name: 'Viewer',
  fields: {
    allBlogPosts: {
      args: {
        first: {
          type: GraphQLInt,
        },
        after: {
          type: GraphQLString,
        },
        orderBy: {
          type: OrderByInput,
        },
      },
      type: BlogPostConnectionType,
    },
  },
});

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    viewer: {type: ViewerType},
    blogPost: {
      type: Post,
      args: {
        id: {type: new GraphQLNonNull(GraphQLID)},
      },
    },
  },
});

export const schema = new GraphQLSchema({
  query: QueryType,
});

// The rootValue provides a resolver function for each API endpoint
export const rootValue = {
  viewer: () => {
    return {
      allBlogPosts,
    };
  },
  blogPost: ({id}: {id: string}) => {
    return findBlogPost(id);
  },
};
