import React, { useState } from 'react';
import { LoginAPI, RegisterAPI, GoogleSignInAPI } from '../api/AuthApi';
import '../Sass/LoginComponent.scss';;
import linkedinLogo from '../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';

export default function LoginComponent() {
  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try{
      let res = await LoginAPI(credentials.email, credentials.password);
      toast.success('Signed In to Linkedin!')
    }
    catch(err){
      toast.error("Please check your Credentials!")
    } 
  };

  const register = async () => {
    try{
      let res = await RegisterAPI(credentials.email, credentials.password);
    }
    catch(err){} 
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
  }


  return (
    <div className='login-wrapper'>
      <img src={linkedinLogo} alt="Linkedin Logo" className='linkedin-logo' />
      <div className='login-wrapper-inner'>
      <h1 className='heading'>Sign in</h1>
      <p className='sub-heading'>Stay updated on your professional world</p>
      <div className="auth-inputs">
        <input 
          onChange={(event) => setCredentials({...credentials, email: event.target.value})
          }
          type='email'
          className='common-input' 
          placeholder='Email or Phone' 
        />
        <input 
          onChange={(event) => setCredentials({...credentials, password: event.target.value})
          }
          type='password'
          className='common-input' 
          placeholder='Password' 
        />
      </div>
        <button onClick={login} className="login-btn">Sign in</button>
      </div>
      <hr className='hr-text' data-content='or' />
      <GoogleButton className='google-btn' onClick={googleSignIn} />
      <p className='join-now-wrapper'>New to LinkedIn? <span className='join-now'>Join Now</span> </p>
    </div>
  )
}
