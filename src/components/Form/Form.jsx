import React, { Component } from 'react';
import FormInputLogin from './FormInputLogin';
import FormInputPassword from './FormInputPassword';
import form from './form.css';
import ButtonSignIn from './ButtonSignIn';
import ButtonSignUp from './ButtonSignUp';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: '',
      password: '',
      signIn: true,
      signUp: false,
      authorization: false,
    };

    this.onLoginChangeValue = this.onChangeValue.bind(this, 'login');
    this.onPasswordChangeValue = this.onChangeValue.bind(this, 'password');
    this.submitSignIn = this.submit.bind(this, 'signIn');
    this.submitSignUp = this.submit.bind(this, 'singUp');
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  onChangeValue(name, event) {
    this.setState({ [name]: event.target.value });
  }

  submit(button, event) {
    event.preventDefault();
    if (button === 'signIn') {
      console.log(event.target, this.state.login, this.state.password);
    } else this.setState({ signIn: false });
  }

  render() {
    if (this.state.signIn) {
      return (
        <form className="authorization-form">
          <FormInputLogin onChangeValue={this.onLoginChangeValue} />
          <FormInputPassword onChangeValue={this.onPasswordChangeValue} />
          <ButtonSignIn onSubmit={this.submitSignIn} />
          <ButtonSignUp onSubmit={this.submitSignUp} />
        </form>
      );
    }

    return (
      <form className="authorization-form" />
    );
  }
}
