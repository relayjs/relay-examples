import {Suspense} from 'react';
import {usePaginationFragment, graphql} from 'react-relay';
import {Title, Button} from './LayoutComponents';
import RelayMatchContainer from './RelayMatchContainer';
import type {BlogPosts_viewer$key} from '../__generated__/BlogPosts_viewer.graphql';

export default function BlogPosts({viewer}: {viewer: BlogPosts_viewer$key}) {
  const {data, loadNext, hasNext, isLoadingNext} = usePaginationFragment(
    graphql`
      fragment BlogPosts_viewer on Viewer
      @refetchable(queryName: "BlogPostsPaginationQuery")
      @argumentDefinitions(
        after: {type: String}
        first: {type: Int, defaultValue: 2}
      ) {
        allBlogPosts(after: $after, first: $first, orderBy: {createdAt: desc})
          @connection(key: "BlogPosts_allBlogPosts") {
          edges {
            node {
              __id
              content @match {
                ...FancyBlogPostPreview_post @module(name: "FancyBlogPostPreview")
                ...BlogPostPreview_post @module(name: "BlogPostPreview")
              }
            }
          }
        }
      }
    `,
    viewer,
  );

  return (
    <div>
      <Title>Blog posts</Title>
      <div>
        <Suspense fallback={null}>
          <ul className="space-y-5 mb-10">
            {data?.allBlogPosts?.edges.map(({node}) => {
              return <RelayMatchContainer key={node.__id} match={node.content} />;
            })}
          </ul>
        </Suspense>
        <LoadMore
          disabled={isLoadingNext || !hasNext}
          onClick={() => {
            loadNext(1);
          }}
        />
      </div>
    </div>
  );
}

function LoadMore({onClick, disabled}: {onClick: () => void; disabled: boolean}) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      Load More
    </Button>
  );
}
