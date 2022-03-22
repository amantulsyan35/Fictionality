import { Link } from 'react-router-dom';

import './signup.css';
import '../../../styles/base.css';

import { FormInput } from '../../../components/Input';
import { FormButton } from '../../../components/Button';

const Signup = () => {
  return (
    <div class='signup-container'>
      <div class='signup-form'>
        <div class='signup-heading'>
          <h4>Signup</h4>
        </div>
        <form class='form'>
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

          <div class='form-desc'>
            <FormInput
              label='I accept all Terms & Conditions'
              type='checkbox'
              className='form-remember'
            />
          </div>
          <FormButton label='Create New Account' />
          <div class='form-footer'>
            <Link to='/login'>Already have an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
