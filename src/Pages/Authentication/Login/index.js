import { Link, useNavigate } from 'react-router-dom';

import './login.css';
import '../../../styles/base.css';

import { FormInput } from '../../../components/Input';
import { FormButton } from '../../../components/Button';
import { useUser } from '../../../context/user-context';

import { loginUser } from '../../../services/user-service';

const Login = () => {
  const { userState, userDispatch } = useUser();
  let navigate = useNavigate();

  const handleCheck = () => {
    userDispatch({
      type: 'TOGGLE_CHECK',
    });
  };

  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      const loggedInUser = await loginUser(userState.email, userState.password);

      window.localStorage.setItem(
        'encodedToken',
        loggedInUser.data.encodedToken
      );

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

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
            name='email'
            className='form-group'
            onChange={(e) =>
              userDispatch({ type: 'EMAIL', payload: e.target.value })
            }
          />
          <FormInput
            label='PASSWORD'
            type='password'
            placeholder='Enter your password'
            name='password'
            className='form-group'
            onChange={(e) =>
              userDispatch({ type: 'PASSWORD', payload: e.target.value })
            }
          />
          <div className='form-desc'>
            <FormInput
              label='Remember me'
              type='checkbox'
              className='form-remember'
              onChange={handleCheck}
            />

            <Link to='#'>Forgot your Password?</Link>
          </div>
          <FormButton label='Log In' onClick={handleLogin} />
          <div className='form-footer'>
            <Link to='/signup'>Create New Account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
