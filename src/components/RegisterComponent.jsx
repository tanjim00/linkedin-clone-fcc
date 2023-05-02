import React, { useState } from 'react';
import { RegisterAPI, GoogleSignInAPI } from '../api/AuthApi';
import '../Sass/LoginComponent.scss';
import linkedinLogo from '../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export default function RegisterComponent() {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({});
  const login = async () => {
    try{
      let res = await RegisterAPI(credentials.email, credentials.password);
      toast.success('Account Created!');
      navigate('/home');
    }
    catch(err){
      toast.error("Registration process may have failed / You have already registered an account!")
    } 
  };

  const googleSignIn = () => {
    let response = GoogleSignInAPI();
  }


  return (
    <div className="login-wrapper">
      <img src={linkedinLogo} className="linkedinLogo" />

      <div className="login-wrapper-inner">
        <h1 className="heading">Sign up</h1>
        <p className="sub-heading">Make the most of your professional life</p>
        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password (6 or more characters)"
          />
        </div>
        <button onClick={login} className="login-btn">
          Agree & Join
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
      <div className="google-btn-container">
        <GoogleButton className='google-btn' onClick={googleSignIn} />
        <p className="go-to-signup">
        Already on LinkedIn?{" "}
          <span className="join-now" onClick={() => navigate("/")}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  )
}
