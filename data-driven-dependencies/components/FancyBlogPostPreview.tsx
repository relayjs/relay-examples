import {useFragment, graphql} from 'react-relay';
import {Link} from '../components/LayoutComponents';
import type {FancyBlogPostPreview_post$key} from '../__generated__/FancyBlogPostPreview_post.graphql';

function FancyListItem(props: React.ComponentProps<'li'>) {
  return <li className="rounded-md bg-gray-100 shadow-xs p-2" {...props} />;
}

const FancyBlogPostPreview = ({post}: {post: FancyBlogPostPreview_post$key}) => {
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
