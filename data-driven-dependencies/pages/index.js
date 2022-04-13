import {graphql, usePreloadedQuery, useLazyLoadQuery} from 'react-relay';

import BlogPosts from '../components/BlogPosts';
import Nav from '../components/Nav';
import {Content} from '../components/LayoutComponents';
import {getPreloadedQuery} from '../lib/relay/getServerSideProps';

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

export async function getServerSideProps() {
  return {
    props: {
      preloadedQueries: {
        pagesIndexQuery: await getPreloadedQuery(pagesIndexQuery, {}),
      },
    },
  };
}
