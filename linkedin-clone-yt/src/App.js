import React, {useEffect} from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Login from './Login';
import { useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';


function App() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch();


  useEffect(() => {
    onAuthStateChanged(auth, (user)=> {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoUrl
          })
        );
      } else {
        dispatch(logout());
      }
    })
  }, []);

  return (
    <div className="App">

      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
        </div>

        /* Widgets */
      )}
    </div>
  );
}

export default App;
