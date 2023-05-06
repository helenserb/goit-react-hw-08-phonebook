import { Form } from '../components/Form/Form';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { isLoadingSelector, contactsSelector } from 'redux/selectors';

export default function ContactsView() {
  const contacts = useSelector(contactsSelector);
  const dispatch = useDispatch();
  const isLoading = useSelector(isLoadingSelector);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      {contacts && <ContactList />}
      {isLoading && <Loader />}
    </div>
  );
}
