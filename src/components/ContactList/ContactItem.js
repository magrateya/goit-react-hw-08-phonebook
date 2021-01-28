import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import Modal from '../Modal/Modal';
import ContactEditor from '../ContactEditor/ContactEditor';

import { useState } from 'react';

export default function ContactItem({ id, name, number, onDeleteContact }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => setIsModalOpen(state => !state);

  return (
    <li className={s.contactItem}>
      <span>{name}</span>
      <span>{number}</span>
      <div>
        <button
          type="submit"
          onClick={toggleModal}
          style={{ marginRight: '10px' }}
        >
          Edit
        </button>
        {isModalOpen && (
          <Modal onClose={toggleModal}>
            <ContactEditor id={id} onCloseModal={toggleModal} />
          </Modal>
        )}
        <button type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </div>
    </li>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteContact: PropTypes.func,
};
