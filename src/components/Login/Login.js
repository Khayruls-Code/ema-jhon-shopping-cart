import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
  const { singInByGoogle, singInByFacebook } = useAuth()
  const location = useLocation()
  const location_url = location.state?.from

  const history = useHistory()

  //handleling google sing in
  const handleGoogleSingIn = () => {
    singInByGoogle()
      .then(result => {
        console.log(result.user)
        history.push(location_url || '/home')
      })
      .catch(error => console.log(error))
  }

  //handleing facebook sing in
  const handleFacebookSingIn = () => {
    singInByFacebook()
      .then(result => {
        console.log(result.user)
        history.push(location_url || "/home")
      })
      .catch(error => console.log(error.messasge))
  }

  return (
    <div className='form-container'>
      <div className="login">
        <h1 className='form-title'>Login Form</h1>
        <form>
          <div>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <input type="password" placeholder="Password" />
          </div>
          <input type="submit" value="Sing In" />
          <p className='haveAccount'>New to Ema-Jhon <Link className="link" to='/registration'>Register</Link></p>
        </form>
        <div className="extra-login">
          <div onClick={handleGoogleSingIn} className='google'>
            <i className='fab fa-google-plus'></i>
            <p>Google</p>
          </div>
          <div onClick={handleFacebookSingIn} className='facebook'>
            <i className='fab fa-facebook-f'></i>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;