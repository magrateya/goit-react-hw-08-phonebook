import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { authSelectors } from '../../redux/auth';

const Navigation = () => {
  const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
        >
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
