import {graphql, usePreloadedQuery, useLazyLoadQuery} from 'react-relay';
import BlogPost from '../../components/BlogPost';
import {Content} from '../../components/LayoutComponents';
import Nav from '../../components/Nav';
import {getPreloadedQuery} from '../../lib/relay/getServerSideProps';

// TODO: think about relay's query naming conventions
const query = graphql`
  query IdPostPageQuery($id: ID!) @preloadable {
    blogPost(id: $id) {
      ...BlogPost_post
    }
  }
`;

export default function Post(props) {
  const {blogPost} = usePreloadedQuery(query, props.queryRefs.query);
  return (
    <>
      <Nav />
      <Content>
        {blogPost ? <BlogPost post={blogPost} /> : <p>Post not found.</p>}
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
