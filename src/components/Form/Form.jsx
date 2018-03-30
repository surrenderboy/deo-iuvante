import React, { Component } from 'react';
import form from './form.module.css';
import SignInOrUpForm from './SignInOrUpForm';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loginValidationState: true,
      passwordValidationState: true,
      confirmPasswordValidationState: true,
      passwordsMatch: true,
      signUp: false,
    };

    this._values = {
      login: '',
      password: '',
      confirmPassword: '',
    };

    this.onLoginChangeValue = this.onChangeValue.bind(this, 'login');
    this.onPasswordChangeValue = this.onChangeValue.bind(this, 'password');
    this.onConfirmPasswordChangeValue = this.onChangeValue.bind(this, 'confirmPassword');
    this.submitSignIn = this.submit.bind(this, 'signIn');
    this.submitSignUp = this.submit.bind(this, 'signUp');
    this.submitCreateAccount = this.submit.bind(this, 'createAcc');
  }

  onChangeValue(name, event) {
    this._values = {
      ...this._values,
      [name]: event.target.value,
    };
  }

  submit(button, event) {
    if (button === 'signIn' || button === 'createAcc') {
      this._validateInput(button, this._values.login, this._values.password, this._values.confirmPassword);
    } else {
      this.setState({
        signUp: true,
        loginValidationState: true,
        passwordValidationState: true,
      });
    }
    event.preventDefault();
  }

  _validateInput(button, login, password, confirmPassword) {
    this.setState({
      loginValidationState: login.trim() !== '',
      passwordValidationState: password.trim() !== '',
    });
    if (button === 'createAcc') {
      if (confirmPassword.trim() !== '') {
        this.setState({
          confirmPasswordValidationState: true,
          passwordsMatch: password.trim() === confirmPassword.trim(),
        });
      } else {
        this.setState({
          confirmPasswordValidationState: false,
          passwordsMatch: true,
        });
      }
    }
  }

  render() {
    return (
      <section className={form.form}>
        <form className={form.formFields}>
          <SignInOrUpForm
            createNewUserState={this.state.signUp}
            onLoginChangeValue={this.onLoginChangeValue}
            loginValidationState={this.state.loginValidationState}
            onPasswordChangeValue={this.onPasswordChangeValue}
            passwordValidationState={this.state.passwordValidationState}
            onConfirmPasswordChangeValue={this.onConfirmPasswordChangeValue}
            confirmPasswordValidationState={this.state.confirmPasswordValidationState}
            passwordsMatchValidationState={this.state.passwordsMatch}
            onSubmitSignIn={this.submitSignIn}
            onSubmitSignUp={this.submitSignUp}
            onSubmitCreateAccount={this.submitCreateAccount}
          />
        </form>
      </section>
    );
  }
}
