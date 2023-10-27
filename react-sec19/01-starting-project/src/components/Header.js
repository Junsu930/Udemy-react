import classes from './Header.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch();
  const logged = useSelector((state) => state.auth.isAuthenticated);

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const myMenu = (
    <nav>
      <ul>
        <li>
          <a href="/">My Products</a>
        </li>
        <li>
          <a href="/">My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  );

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {logged && myMenu}
    </header>
  );
};

export default Header;
