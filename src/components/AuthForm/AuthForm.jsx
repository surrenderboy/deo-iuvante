import React, { Component } from 'react';
import Form from '../Form/Form';
import styles from './AuthForm.module.css';

export default class AuthForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signIn: true,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.signUp = this.signUp.bind(this);
  }

  handleSubmit() {
    if (!this.state.signIn) {
      this.setState({
        signIn: true,
      });
    }
  }

  signUp() {
    this.setState({
      signIn: false,
    });
  }

  render() {
    return (
      <section className={styles.form}>
        <div className={styles.formFields}>
          <React.Fragment>
            {this.state.signIn &&
              <p className={styles.formTitle}>
                Sign in to <span className={styles.titleDeoIuvante}>Deo-iuvante</span>
              </p>}
            {!this.state.signIn &&
              <p className={styles.formTitle}>
                Create an account
              </p>}

            <Form
              buttonMessage={this.state.signIn ? 'Sign in' : 'Create an account'}
              confirmPassword={!this.state.signIn}
              onSubmit={this.handleSubmit}
            />

            {this.state.signIn &&
              <p className={styles.formCreateAcc}>
                New to Deo-iuvante?
                <button
                  className={styles.buttonSignUp}
                  onClick={this.signUp}
                >
                  Create an account
                </button>
              </p>}
          </React.Fragment>
        </div>
      </section>
    );
  }
}
