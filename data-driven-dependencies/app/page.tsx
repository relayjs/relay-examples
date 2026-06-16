'use client';

import {graphql, useLazyLoadQuery} from 'react-relay';
import BlogPosts from '../components/BlogPosts';

const HomeQuery = graphql`
  query pageHomeQuery {
    viewer {
      ...BlogPosts_viewer
    }
  }
`;

export default function Home() {
  const {viewer} = useLazyLoadQuery(HomeQuery, {});
  return <BlogPosts viewer={viewer} />;
}
