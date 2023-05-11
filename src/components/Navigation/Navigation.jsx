import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <p className={css.item}>Home</p>
      </NavLink>
      {isLoggedIn ? (<NavLink className={css.link} to="/contacts">
        <p className={css.item}>Contacts</p>
      </NavLink>): (<></>)}
      
    </nav>
  );
};
