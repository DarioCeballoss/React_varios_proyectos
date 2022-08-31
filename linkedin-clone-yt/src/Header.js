import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch} from 'react-redux';
import { getAuth } from "firebase/auth";
import {logout} from './features/userSlice'

function Header() {
  const dispatch = useDispatch();
  const auth = getAuth();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>

      <div className='header_left'>
        <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='logo de  linkedin' />
        <div className='header_search'>
          <SearchIcon />
          <input placeholder='Search' type='text' />
        </div>
      </div>

      <div className='header_right'>
        <HeaderOption Icon={HomeIcon} title='Home' />
        <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
        <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOption Icon={ChatIcon} title='Messaging' />
        <HeaderOption Icon={NotificationsIcon} title='Noifications' />
        <HeaderOption title='me' onClick={logoutOfApp} avatar='https://media-exp1.licdn.com/dms/image/C4D03AQFSUIB4--g4rw/profile-displayphoto-shrink_100_100/0/1652040383854?e=1666828800&v=beta&t=uMAR1DWJpQnK0T6zr248oHUMC8N620N-McQxi3gWf2U' />

      </div>
    </div>
  );
}

export default Header;
//RFCE

