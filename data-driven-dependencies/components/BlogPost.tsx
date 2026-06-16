import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';
import type {BlogPost_post$key} from '../__generated__/BlogPost_post.graphql';

const BlogPost = ({post}: {post: BlogPost_post$key}) => {
  const data = useFragment(
    graphql`
      fragment BlogPost_post on BlogPost {
        id
        title
        content
      }
    `,
    post,
  );

  return (
    <article>
      <Title>{data.title}</Title>
      <Text>{data.content}</Text>
    </article>
  );
};

export default BlogPost;
