import React, { Component } from 'react';
import Form from './Form';
import form from './form.module.css';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signIn: true,
      confirmPassword: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  onSubmit() {
    console.log(this.state);
  }

  signUp() {
    this.setState({
      signIn: false,
      confirmPassword: true,
    });
  }

  render() {
    return (
      <section className={form.form}>
        <div className={form.formFields}>
          {this.state.signIn &&
          <React.Fragment>
            <p className={form.formTitle}>Sign in to <span className={form.titleDeoIuvante}>Deo-iuvante</span></p>
            <Form
              buttonMessage="Sign in"
              confirmPassword={this.state.confirmPassword}
              onSubmit={this.onSubmit}
            />
            <p className={form.formCreateAcc}>
                New to Deo-iuvante?
              <button
                className={form.buttonSignUp}
                onClick={this.signUp}
              >Create an account
              </button>
            </p>
          </React.Fragment>
          }
          {!this.state.signIn &&
          <React.Fragment>
            <p className={form.formTitle}>Create an account</p>
            <Form
              buttonMessage="Create an account"
              confirmPassword={this.state.confirmPassword}
              onSubmit={this.onSubmit}
            />
          </React.Fragment>
          }
        </div>
      </section>
    );
  }
}
