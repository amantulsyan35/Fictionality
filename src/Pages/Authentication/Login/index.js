import { Link } from 'react-router-dom';

import './login.css';
import '../../../styles/base.css';

import { FormInput } from '../../../components/Input';
import { FormButton } from '../../../components/Button';

const Login = () => {
  return (
    <div className='login-container'>
      <div className='login-form'>
        <div className='login-heading'>
          <h4>Login</h4>
        </div>
        <form className='form'>
          <FormInput
            label='EMAIL'
            type='email'
            placeholder='Enter your email'
            className='form-group'
          />
          <FormInput
            label='PASSWORD'
            type='password'
            placeholder='Enter your password'
            className='form-group'
          />
          <div className='form-desc'>
            <FormInput
              label='Remember me'
              type='checkbox'
              className='form-remember'
            />

            <Link to='#'>Forgot your Password?</Link>
          </div>
          <FormButton label='Log In' />
          <div className='form-footer'>
            <Link to='#'>Create New Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
