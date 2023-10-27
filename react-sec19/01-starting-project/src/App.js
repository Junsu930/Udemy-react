import Counter from './components/Counter';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfile />}
      <Counter />
    </>
  );
}

export default App;
