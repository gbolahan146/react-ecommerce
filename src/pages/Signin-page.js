import React, { Component } from 'react';
class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    this.handleChange = this.handleChange.bind(this)
    }

    handleChange (event) {
        console.log(event.target.value)
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    handleSubmit (event)  {
        event.preventDefault();
    }

    render() {
        return (
            <div className="Register">
            <div className="Register-image-prop Login-image">
                <div className="Register-image-overlay">
                    <p><em>"Happiness is cakes, cupcakes and more cakes" - Anon</em></p>
                </div>
            </div>
            <div className="Register-form-lyt">
                <div className="Register-form">
                    <h3 className="Register-heading">Sign In</h3>
                    <h5 className="Register-subtext">Not into cake yet? <span onClick={() => history.push('/signup')}>Get In!</span></h5>
                    <form onSubmit={this.handleSubmit} className="Reg-form Login-form">
                        <div>
                            <label>
                                <input onChange={this.handleChange} name='email' type="email" placeholder="Email Address" className="input-full"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                <input onChange={this.handleChange} name='password' type="password" placeholder="Password" className="input-full"/>
                            </label>
                        </div>
                        <button className="Register-btn">Login</button>
                    </form>
                    <button className="Register-btn">Sign in With Google</button>
                </div>
            </div>
        </div>
        );
    }
}

export default Login;
