import {graphql, usePreloadedQuery, useLazyLoadQuery} from 'react-relay';
import RelayMatchContainer from '../../components/RelayMatchContainer';
import {Content} from '../../components/LayoutComponents';
import Nav from '../../components/Nav';
import {getPreloadedQuery} from '../../lib/relay/getServerSideProps';

// TODO: think about relay's query naming conventions
const query = graphql`
  query IdPostPageQuery($id: ID!) @preloadable {
    blogPost(id: $id) {
      content @match {
        ...FancyBlogPost_post @module(name: "FancyBlogPost")
        ...BlogPost_post @module(name: "BlogPost")
      }
    }
  }
`;

export default function Post(props) {
  const {blogPost} = usePreloadedQuery(query, props.queryRefs.query);
  return (
    <>
      <Nav />
      <Content>
        {blogPost ? <RelayMatchContainer match={blogPost.content} /> : <p>Post not found.</p>}
      </Content>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    props: {
      preloadedQueries: {
        query: await getPreloadedQuery(query, {id: ctx.query.id}),
      },
    },
  };
}
