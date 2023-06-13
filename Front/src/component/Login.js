import React, { Component } from 'react';
import { login } from '../service/serviceLogin';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      emailError: '',
      passwordError: ''
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  validateForm() {
    let emailError = '';
    let passwordError = '';

    if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailError = "The email is invalid. Please enter a valid email address.";
    }
    if (!this.state.password) {
      passwordError = "The password field is required.";
    }
    if (emailError || passwordError) {
      this.setState({ emailError, passwordError });
      return false;
    }

    return true;
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(e)
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    const isValid = this.validateForm();
    if (isValid) {
      login(user).then(res => {
        if (res) {
          localStorage.setItem('loggedIn', true);
          this.props.signIn(res);
          console.log("You have successfully logged in:", res.user);
        }
      });
    } else {
      console.log("There is a problem with the validation of the information.");
      alert("There is a problem with the validation of the information.");
    }
  }

  render() {
    return (
      <>
        <div className="flex min-h-screen">
          <div className="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div className="mx-auto w-full max-w-sm lg:w-96">
              <div>
                <img
                  className="h-10 w-auto"
                  src="https://i.ibb.co/tD9mnVd/logo.png"
                  alt="absencepro"
                />
                <h2 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Connectez-vous à votre compte
                </h2>
              </div>

              <div className="mt-10">
                <div>
                  <form onSubmit={this.onSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                        Email address
                      </label>
                      <div className="mt-2">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          value={this.state.email}
                          onChange={this.onChangeEmail}
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div style={{ color: "red" }}>{this.state.emailError}</div>
                    </div>

                    <div>
                      <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        Password
                      </label>
                      <div className="mt-2">
                        <input
                          id="password"
                          name="password"
                          type="password"
                          autoComplete="current-password"
                          required
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                      <div style={{ color: "red" }}>{this.state.passwordError}</div>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        S'identifier
                      </button>
                    </div>
                  </form>
                </div>


              </div>
            </div>
          </div>
          <div className="relative w-0 flex-1 lg:block">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="https://www.itlearning-campus.com/wp-content/uploads/2021/05/main_slide.jpeg"
              alt=""
            />
            <div className="absolute top-0 left-0 w-full h-full bg-cyan-950 bg-opacity-80">
            <div className="flex flex-col items-center justify-center h-full">
              <h2 className="text-2xl font-bold text-white">IT Learning Campus</h2>
              <h4 className="text-xl font-bold text-white">
              AbsencePro Login
              </h4>
            </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
