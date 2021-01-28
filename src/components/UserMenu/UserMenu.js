import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../../img/ava.png';
import s from '../ContactForm/ContactForm.module.css';

const UserMenu = () => {
  const name = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={defaultAvatar}
        alt=""
        width="55"
        style={{ marginRight: '10px' }}
      />
      <span style={{ fontWeight: 700, marginRight: 12 }}>Welcome, {name}</span>
      <button
        onClick={() => dispatch(authOperations.logOut())}
        type="submit"
        style={{ padding: '5px 15px' }}
        className={s.formBtn}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
