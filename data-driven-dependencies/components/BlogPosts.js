import {Suspense} from 'react';
import {usePaginationFragment, graphql} from 'react-relay';
import {Title, Button} from './LayoutComponents';
import RelayMatchContainer from './RelayMatchContainer';

export default function BlogPosts({viewer}) {
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

function LoadMore({onClick, disabled}) {
  return (
    <Button onClick={onClick} disabled={disabled}>
      Load More
    </Button>
  );
}
