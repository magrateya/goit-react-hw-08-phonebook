import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import { authSelectors } from '../redux/auth';
import { operations } from '../redux/contacts';

function PhonebookView() {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);

  // useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);
  useEffect(() => {
    isAuthenticated && dispatch(operations.fetchContacts());
  }, [dispatch, isAuthenticated]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default PhonebookView;
