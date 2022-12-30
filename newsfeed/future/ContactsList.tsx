import * as React from "react";
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import type {ContactsListFragment$key} from './__generated__/ContactsListFragment.graphql';
import Card from './Card';
import ContactRow from './ContactRow';

export type Props = {
  viewer: ContactsListFragment$key;
};

const ContactsListFragment = graphql`
  fragment ContactsListFragment on Viewer {
    contacts {
      ...ContactRowFragment
    }
  }
`;

export default function ContactsList({ viewer }: Props) {
  const data = useFragment(ContactsListFragment, viewer);
  return (
    <Card>
      {data.contacts.map(contact => <ContactRow contact={contact} />)}
    </Card>
  );
}
