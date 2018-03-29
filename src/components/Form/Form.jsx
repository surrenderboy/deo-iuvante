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
      loginValidationState: true,
      passwordValidationState: true,
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
        loginValidationState: true,
        passwordValidationState: true,
      });
    }
    event.preventDefault();
  }

  _checkValue(login, password) {
    const loginValue = login.trim(),
      passwordValue = password.trim();
    if (!loginValue) {
      this.setState({ loginValidationState: false });
    } else this.setState({ loginValidationState: true });
    if (!passwordValue) {
      this.setState({ passwordValidationState: false });
    } else this.setState({ passwordValidationState: true });
  }

  render() {
    if (this.state.signIn) {
      return (
        <section className={form.form}>
          <form className={form.formFields}>
            <p className={form.formTitle}>Sign in to <span className={form.titleDeoIuvante}>Deo-iuvante</span></p>
            <FormInput
              onChangeValue={this.onLoginChangeValue}
              label="Login"
              className={form.loginInput}
              id="login-input"
              type="text"
              placeholder="Login..."
              validationState={this.state.loginValidationState}
              errorMessage="Login can't be blank"
            />
            <FormInput
              onChangeValue={this.onPasswordChangeValue}
              label="Password"
              className={form.passwordInput}
              id="password-input"
              type="password"
              placeholder="Password"
              validationState={this.state.passwordValidationState}
              errorMessage="Password can't be blank"
            />
            <FormButton
              className={form.buttonSignIn}
              onSubmit={this.submitSignIn}
              text="Sign in"
            />
            <p className={form.formCreateAcc}>
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
          <form className={form.formFields}>
            <p className={form.formTitle}>Create your account</p>
            <FormInput
              onChangeValue={this.onLoginChangeValue}
              label="Username"
              className={form.loginInput}
              id="login-input"
              type="text"
              placeholder="Username..."
              validationState={this.state.loginValidationState}
              errorMessage="Username can't be blank"
            />
            <FormInput
              onChangeValue={this.onPasswordChangeValue}
              label="Password"
              className={form.passwordInput}
              id="password-input"
              type="password"
              placeholder="Password"
              validationState={this.state.passwordValidationState}
              errorMessage="Password can't be blank"
            />
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
