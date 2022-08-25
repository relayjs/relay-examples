import {useFragment, graphql} from 'react-relay';
import {Link} from '../components/LayoutComponents';

function FancyListItem(props) {
  return <li className="rounded-md bg-gray-100 shadow-xs p-2" {...props} />;
}

const FancyBlogPostPreview = ({post}) => {
  const data = useFragment(
    graphql`
      fragment FancyBlogPostPreview_post on FancyBlogPost {
        id
        title
        content
      }
    `,
    post,
  );

  return (
    <FancyListItem>
      <Link href={`/post/${data.id}`}>✨{data.title}✨</Link>
      <p>{data.content}</p>
    </FancyListItem>
  );
};

export default FancyBlogPostPreview;
