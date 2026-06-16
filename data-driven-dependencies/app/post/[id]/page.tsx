'use client';

import {use} from 'react';
import {graphql, useLazyLoadQuery} from 'react-relay';
import RelayMatchContainer from '../../../components/RelayMatchContainer';

const PostQuery = graphql`
  query pagePostQuery($id: ID!) {
    blogPost(id: $id) {
      content @match {
        ...FancyBlogPost_post @module(name: "FancyBlogPost")
        ...BlogPost_post @module(name: "BlogPost")
      }
    }
  }
`;

export default function Post({params}) {
  const {id} = use(params);
  const {blogPost} = useLazyLoadQuery(PostQuery, {id});
  return blogPost ? (
    <RelayMatchContainer match={blogPost.content} />
  ) : (
    <p>Post not found.</p>
  );
}
