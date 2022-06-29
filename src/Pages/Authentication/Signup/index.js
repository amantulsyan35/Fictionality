import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import './signup.css';
import '../../../styles/base.css';

import { FormInput } from '../../../components/Input';
import { FormButton } from '../../../components/Button';

import { useUser } from '../../../context/user-context';

import { signUpUser } from '../../../services/user-service';

const Signup = () => {
  const { userState, userDispatch } = useUser();
  let navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async (e) => {
    try {
      e.preventDefault();
      const signedUser = await signUpUser(user);

      window.localStorage.setItem(
        'encodedToken',
        JSON.stringify(signedUser.data.encodedToken)
      );
      userDispatch({
        type: 'LOGIN_USER',
        payload: signedUser.data.createdUser,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = () => {
    userDispatch({
      type: 'TOGGLE_CHECK',
    });
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
        <div className='signup-heading'>
          <h4>Signup</h4>
        </div>
        <form className='form'>
          <FormInput
            label='FIRST-NAME'
            type='text'
            placeholder='Enter your First Name'
            className='form-group'
            onChange={handleChange}
            name='firstName'
          />
          <FormInput
            label='LAST-NAME'
            type='text'
            placeholder='Enter your Last Name'
            className='form-group'
            onChange={handleChange}
            name='lastName'
          />
          <FormInput
            label='EMAIL'
            type='email'
            placeholder='Enter your email'
            className='form-group'
            onChange={handleChange}
            name='email'
          />
          <FormInput
            label='PASSWORD'
            type='password'
            placeholder='Enter your password'
            className='form-group'
            onChange={handleChange}
            name='password'
          />

          <div className='form-desc'>
            <FormInput
              label='I accept all Terms & Conditions'
              type='checkbox'
              className='form-remember'
              onChange={handleCheck}
            />
          </div>
          <FormButton
            label='Create New Account'
            onClick={handleSignup}
            disabledAttr={userState.checked ? false : true}
          />
          <div className='form-footer'>
            <Link to='/login'>Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
