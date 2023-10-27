import classes from './Auth.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../store/auth';

const Auth = () => {
  const dispatch = useDispatch();
  const login = useSelector((state) => state.auth.isAuthenticated);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };

  const notLoggedInSection = (
    <section>
      <form onSubmit={loginHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <button>Login</button>
      </form>
    </section>
  );

  const LoggedInSection = (
    <section>
      <p>Welcome!</p>
    </section>
  );

  return (
    <main className={classes.auth}>
      {!login && notLoggedInSection}
      {login && LoggedInSection}
    </main>
  );
};

export default Auth;
