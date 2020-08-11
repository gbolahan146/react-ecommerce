import React, { Component } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Form from '../../components/form/index';
import FormInput from '../../components/formInput/index';
import Button from '../../components/button';

class Login extends Component {
    render() {
        return (
            <div className="Register">
                <div className="Register-image-prop Login-image">
                    <div className="Register-image-overlay">
                        <p>
                            <em>"Happiness is cakes, cupcakes and more cakes" - Anon</em>
                        </p>
                    </div>
                </div>
                <div className="Register-form-lyt">
                    <div className="Register-form">
                        <h3 className="Register-heading">Sign In</h3>
                        <h5 className="Register-subtext">
                            Not into cake yet? <span>Get In!</span>
                        </h5>
                        <Form>
                            <FormInput type="email" placeholder="Email" label="Email" />
                            <FormInput
                                type="password"
                                placeholder="Password"
                                label="Password"
                            />
                            <Button type="submit" placeholder="Sign In" />
                            <h5 className="cta-text">
                                Don't have an account yet?<Link to="/register"> Sign Up! </Link>
                            </h5>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
