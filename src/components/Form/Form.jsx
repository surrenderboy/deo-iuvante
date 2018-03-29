import React, { Component } from 'react';
import form from './form.module.css';
import SignInOrUpForm from './SignInOrUpForm';

export default class Form extends Component {
  constructor(props) {
    super(props);

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
      this._checkOnEmptyValue(this.state.login, this.state.password);
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

  _checkOnEmptyValue(login, password) {
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
    return (
      <section className={form.form}>
        <div className={form.formFields}>
          <SignInOrUpForm
            signIn={this.state.signIn}
            signUp={this.state.signUp}
            onLoginChangeValue={this.onLoginChangeValue}
            loginValidationState={this.state.loginValidationState}
            onPasswordChangeValue={this.onPasswordChangeValue}
            passwordValidationState={this.state.passwordValidationState}
            onSubmitSignIn={this.submitSignIn}
            onSubmitSignUp={this.submitSignUp}
            onSubmitCreateAccount={this.submitCreateAccount}
          />
        </div>
      </section>
    );
  }
}
