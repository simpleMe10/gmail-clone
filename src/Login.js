import React from 'react';
import './Login.css'
import { Button } from '@mui/material';
import { auth, provider } from './firebase';
import { login } from './features/userSlice';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const signin = () => {
    auth.signInWithPopup(provider).then(({ user }) => {
        dispatch(login({
            displayName: user.displayName, 
            email: user.email,
            photoUrl: user.photoURL
        }))
    })
    .catch(error => alert(error.message))
  }

  return (
    <div className='login'>
        <div className='login-container'>
            <img src='https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg'/>

            <Button variant='contained' color='primary' onClick={signin}>Login</Button>
        </div>
    </div>
  )
}

export default Login
