import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../Firebase/utils';

class Register extends Component {

  state = {
    fullName: '',
    lastName: '',
    email: '',
    password: ''
  };


  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

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
            <form onSubmit={this.handleSubmit} className="Reg-form Reg-form-h">
              <div className="flex flex-btw">
                <label>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="input-half"
                    name="firstName"
                    value={this.state.firstName}
                  />
                </label>
                <label>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="input-half"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input-full"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}

                  />
                </label>
              </div>
              <div>
                <label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-full"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <button className="Register-btn">Register</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
