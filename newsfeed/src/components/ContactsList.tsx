import * as React from "react";
import Image from './Image';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import type {ContactsListFragment$key} from './__generated__/ContactsListFragment.graphql';


export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer {
    contacts {
      id
      name
      profilePicture {
        ...ImageFragment
      }
    }
  }
`;

export default function ContactsList({ viewer }: Props) {
  const data = useFragment(ContactsListFragment, viewer);
  return (
    data.contacts.map(contact => (
      <div className="byline" key={contact.id}>
        <Image image={contact.profilePicture} width={60} height={60} className="byline__image" />
        <div className="byline__name">{contact.name}</div>
      </div>
    ))
  );
}
