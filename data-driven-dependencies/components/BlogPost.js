import {useFragment, graphql} from 'react-relay';
import {Title, Text} from '../components/LayoutComponents';

const BlogPost = ({post}) => {
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
