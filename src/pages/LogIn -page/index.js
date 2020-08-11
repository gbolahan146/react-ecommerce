import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Form from '../../components/form/index';
import FormInput from '../../components/formInput/index';
import Button from '../../components/button';

class Login extends Component {
  render() {
    return (
      <div className='Register'>
        <div className='Register-image'>
          <p>
            <em>"Happiness is cakes, cupcakes and more cakes" - Anon</em>
          </p>
        </div>
        <div className='Register-form'>
          <h3 className='Register-heading'>Sign In</h3>
          <p className='Register-subtext'>
            Not into cake yet?{' '}
            <span>
              <Link to='/products'>Get In!</Link>
            </span>
          </p>
          <Form>
            <FormInput type='email' placeholder='Email' label='Email' />
            <FormInput type='password' placeholder='Password' label='Password' />
            <Button type='submit' placeholder='Sign In' />
          </Form>
          <h4 className='cta-text'>
            Don't have an account yet?<Link to='/register'> Sign Up! </Link>
          </h4>
        </div>
      </div>
    );
  }
}

export default Login;
