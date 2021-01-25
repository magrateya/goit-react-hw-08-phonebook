import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink to="/phonebook" className={s.link} activeClassName={s.activeLink}>
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
