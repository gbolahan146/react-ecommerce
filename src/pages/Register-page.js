import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div className="Register">
        <div className="Register-image-prop Register-image">
          <div className="Register-image-overlay">
            <p>
              <em>"Life's too short to say no to cake" - Anon</em>
            </p>
          </div>
        </div>
        <div className="Register-form-lyt">
          <div className="Register-form">
            <h3 className="Register-heading">Create an account with us</h3>
            <h5 className="Register-subtext">
              Already registered?{' '}
              <span>
                <Link to="/signin"> Sign in!</Link>
              </span>
            </h5>
            <form className="Reg-form Reg-form-h">
              <input
                className="input"
                type="text"
                placeholder="First Name"
                className="input-full"
              />
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                placeholder="Last Name"
                className="input-full"
              />
              <label className="label">Last Name</label>
              <input
                className="input"
                type="email"
                placeholder="Email Address"
                className="input-full"
              />
              <label className="label">Email</label>
              <input
                className="input"
                type="password"
                placeholder="Password"
                className="input-full"
              />
              <label className="label">Password</label>
              <button className="Register-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
