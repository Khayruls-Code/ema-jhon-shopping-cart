import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import '../Login/Login.css'

const Registration = () => {
  const { handleName, handleEmail, handlePassword, createUserByPassword, updateUserProfile } = useAuth()

  const location = useLocation()
  const location_url = location.state?.from

  const history = useHistory()

  const handleCreateUser = (e) => {
    e.preventDefault()
    createUserByPassword()
      .then(result => {
        console.log(result.user)
        updateUserProfile()
        history.push(location_url || "/home")
      })
      .catch(error => console.log(error.message))
  }
  return (
    <div className='form-container'>
      <div className="login">
        <h1 className='form-title'>Ragistration Form</h1>
        <form onSubmit={handleCreateUser}>
          <div>
            <input onBlur={handleName} type="text" placeholder="Your Name" />
          </div>
          <div>
            <input onBlur={handleEmail} type="email" placeholder="Email" />
          </div>
          <div>
            <input onBlur={handlePassword} type="password" placeholder="Password" />
          </div>
          <div>
            <input type="file" />
          </div>
          <input type="submit" value="Register" />
          <p className='haveAccount'>Already Have an Account <Link className="link" to='/login'>Sing In</Link></p>
        </form>
        <div className="extra-login">
          <div className='google'>
            <i className='fab fa-google-plus'></i>
            <p>Google</p>
          </div>
          <div className='facebook'>
            <i className='fab fa-facebook-f'></i>
            <p>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;