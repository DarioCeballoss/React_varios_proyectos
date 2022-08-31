import React, { useState } from 'react';
import {auth} from './firebase'
import './Login.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");

  const loginToApp = (e) => {
    e.preventDefault();
  };

  const register = () => { 
    if(!name){
      return alert('please enter a full name!');
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth)=> {
      userAuth.user.updateProfile({
        
      })}) 
  };


  return (
    <div className='login'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png' alt='' />

      <form>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Full name (required if registration)'
          type='text'
        />
        <input
          value={profilePic}
          onChange={e => setProfilePic(e.target.value)}
          placeholder='Prpfile pic URL (optional)'
          type='email'
        />
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder='Email'
          type='text' />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='Password'
          type='password'
        />

        <button className='login_register' onClick={loginToApp}>SignIn</button>
      </form>
      <p>Not a member?
        <span className='login_register' onClick={register}>Register Now</span>
      </p>

    </div>
  );
}

export default Login;
