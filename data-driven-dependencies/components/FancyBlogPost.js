import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const FancyBlogPost = ({post}) => {
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
