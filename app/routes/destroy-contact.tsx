import { redirect } from 'react-router';
import type { Route } from './+types/edit-contact';

import { deleteContact } from '../data';

export async function action({ params }: Route.ActionArgs) {
  const contactId = params.contactId;
  await deleteContact(contactId);
  return redirect('/');
}
