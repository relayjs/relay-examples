import {graphql, usePreloadedQuery, useLazyLoadQuery} from 'react-relay';

import BlogPosts from '../components/BlogPosts';
import Nav from '../components/Nav';
import {Content} from '../components/LayoutComponents';

const pagesIndexQuery = graphql`
  query pagesIndexQuery @preloadable {
    viewer {
      ...BlogPosts_viewer
    }
  }
`;

export default function Index(props) {
  const {viewer} = usePreloadedQuery(
    pagesIndexQuery,
    props.queryRefs.pagesIndexQuery,
  );
  return (
    <>
      <Nav />
      <Content>
        <BlogPosts viewer={viewer} />
      </Content>
    </>
  );
}

Index.getRelayPreloadProps = function () {
  return {
    queries: {
      pagesIndexQuery: {
        params: pagesIndexQuery.params,
        variables: {},
      },
    },
  };
};
