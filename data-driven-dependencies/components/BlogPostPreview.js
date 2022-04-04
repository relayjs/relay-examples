import {useFragment, graphql} from 'react-relay';
import {Link} from '../components/LayoutComponents';

const BlogPostPreview = ({post}) => {
  const data = useFragment(
    graphql`
      fragment BlogPostPreview_post on BlogPost {
        id
        title
      }
    `,
    post,
  );

  return (
    <li>
      <Link href={`/post/${data.id}`}>{data.title}</Link>
    </li>
  );
};

export default BlogPostPreview;
