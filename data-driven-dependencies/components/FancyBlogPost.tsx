import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';
import type {FancyBlogPost_post$key} from '../__generated__/FancyBlogPost_post.graphql';

const FancyBlogPost = ({post}: {post: FancyBlogPost_post$key}) => {
  const data = useFragment(
    graphql`
      fragment FancyBlogPost_post on FancyBlogPost {
        id
        title
        content
      }
    `,
    post,
  );

  return (
    <article>
      <Title>✨{data.title}✨</Title>
      <Text>{data.content}</Text>
    </article>
  );
};

export default FancyBlogPost;
