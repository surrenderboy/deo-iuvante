import React, { Component } from 'react';
import FormInput from './FormInput';
import form from './form.module.css';
import FormButton from './FormButton';

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      login: '',
      password: '',
      loginIsEmpty: false,
      passwordIsEmpty: false,
      signIn: true,
      signUp: false,
    };

    this.onLoginChangeValue = this.onChangeValue.bind(this, 'login');
    this.onPasswordChangeValue = this.onChangeValue.bind(this, 'password');
    this.submitSignIn = this.submit.bind(this, 'signIn');
    this.submitSignUp = this.submit.bind(this, 'signUp');
    this.submitCreateAccount = this.submit.bind(this, 'createAcc');
  }

  onChangeValue(name, event) {
    this.setState({ [name]: event.target.value });
  }

  submit(button, event) {
    if (button === 'signIn' || button === 'createAcc') {
      this._checkValue(this.state.login, this.state.password);
    } else {
      this.setState({
        signIn: false,
        signUp: true,
        loginIsEmpty: false,
        passwordIsEmpty: false,
      });
    }
    event.preventDefault();
  }

  _checkValue(login, password) {
    const loginValue = login.trim(),
      passwordValue = password.trim();
    if (!loginValue) {
      this.setState({ loginIsEmpty: true });
    } else this.setState({ loginIsEmpty: false });
    if (!passwordValue) {
      this.setState({ passwordIsEmpty: true });
    } else this.setState({ passwordIsEmpty: false });
  }

  render() {
    if (this.state.signIn) {
      return (
        <section className={form.form}>
          <form className={form.form__fields}>
            <p className={form.form__title}>Sign in to <span className={form.titleDeoIuvante}>Deo-iuvante</span></p>
            <FormInput
              onChangeValue={this.onLoginChangeValue}
              label="Login"
              className={form.login_input}
              id="login-input"
              type="text"
              placeholder="Login..."
            />
            {
              this.state.loginIsEmpty &&
              <span className={form.error_message}>Login {"can't"} be blank</span>
            }
            <FormInput
              onChangeValue={this.onPasswordChangeValue}
              label="Password"
              className={form.password_input}
              id="password-input"
              type="password"
              placeholder="password"
            />
            {
              this.state.passwordIsEmpty &&
              <span className={form.error_message}>Password {"can't"} be blank</span>
            }
            <FormButton
              className={form.buttonSignIn}
              onSubmit={this.submitSignIn}
              text="Sign in"
            />
            <p className={form.form__createAcc}>
                  New to Deo-iuvante?
              <FormButton
                className={form.buttonSignUp}
                onSubmit={this.submitSignUp}
                text="Create an account"
              />
            </p>
          </form>
        </section>
      );
    }
    if (this.state.signUp) {
      return (
        <section className={form.form}>
          <form className={form.form__fields}>
            <p className={form.form__title}>Create your account</p>
            <FormInput
              onChangeValue={this.onLoginChangeValue}
              label="Username"
              className={form.login_input}
              id="login-input"
              type="text"
              placeholder="Username..."
            />
            {
               this.state.loginIsEmpty &&
               <span className={form.error_message}>Username {"can't"} be blank</span>
            }
            <FormInput
              onChangeValue={this.onPasswordChangeValue}
              label="Password"
              className={form.password_input}
              id="password-input"
              type="password"
              placeholder="password"
            />
            {
               this.state.passwordIsEmpty &&
               <span className={form.error_message}>Password {"can't"} be blank</span>
            }
            <FormButton
              className={form.buttonCreateAccount}
              text="Create an account"
              onSubmit={this.submitCreateAccount}
            />
          </form>
        </section>
      );
    }
    return ('');
  }
}
