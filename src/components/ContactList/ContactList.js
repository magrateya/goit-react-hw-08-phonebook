import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import s from './ContactList.module.css';
import { operations, selectors } from '../../redux/contacts';
import Disconnect from '../../img/disconnect.jpg';

export default function ContactList() {
  const contacts = useSelector(selectors.getVisibleContacts);
  const error = useSelector(selectors.getError);

  const dispatch = useDispatch();

  useEffect(() => dispatch(operations.fetchContacts()), [dispatch]);

  return (
    <>
      {contacts.length > 0 && !error ? (
        <ul className={s.contactList}>
          {contacts.map(contact => (
            <ContactItem
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              onDeleteContact={contId =>
                dispatch(operations.deleteContact(contId))
              }
            />
          ))}
        </ul>
      ) : (
        <div>
          {error && <h2>{error.message}</h2>}
          <img
            src={Disconnect}
            alt="disconnect"
            style={{ maxWidth: '450px', marginTop: '20px' }}
          />
        </div>
      )}
    </>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
