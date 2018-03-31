import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../FormInput/FormInput';
import styles from './Form.module.css';

class Form extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      values: {
        login: '',
        password: '',
        confirmPassword: '',
      },
      errors: {
        login: '',
        password: '',
        confirmPassword: '',
      },
    };

    this.handleLoginChange = this.handleChange.bind(this, 'login');
    this.handlePasswordChange = this.handleChange.bind(this, 'password');
    this.handleConfirmPasswordChange = this.handleChange.bind(this, 'confirmPassword');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setErrors() {
    this.setState({
      errors: {
        ...this.errors,
      },
    });
  }

  clearErrors() {
    this.setState({
      errors: {
        login: '',
        password: '',
        confirmPassword: '',
      },
    });
  }

  handleChange(name, event) {
    this.setState({
      values: {
        ...this.state.values,
        [name]: event.target.value,
      },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validatePresence()) {
      this.setErrors();
      return;
    }
    if (this.props.confirmPassword && !this.validatePassword()) {
      this.setErrors();
      return;
    }

    this.clearErrors();
    this.props.onSubmit(this.state.values);
  }

  validatePresence() {
    this.errors = {};

    Object.entries(this.state.values)
      .forEach(([field, value]) => {
        if (value.trim().length === 0) {
          if (field === 'confirmPassword' && !this.props.confirmPassword) return;

          this.errors[field] = `${field} can't be blank`;
        }
      });

    return Object.keys(this.errors).length === 0;
  }

  validatePassword() {
    this.errors = {};

    if (this.state.values.password !== this.state.values.confirmPassword) {
      this.errors = {
        confirmPassword: "Passwords didn't match. Try again",
      };
    }

    return Object.keys(this.errors).length === 0;
  }

  render() {
    const { confirmPassword, buttonMessage } = this.props;

    return (
      <React.Fragment>
        <FormInput
          label="Login"
          className={styles.loginInput}
          id="login-input"
          type="text"
          placeholder="LoLLiPoP"

          value={this.state.values.login}
          onChange={this.handleLoginChange}
          errorMessage={this.state.errors.login}
        />
        <FormInput
          label="Password"
          className={styles.passwordInput}
          id="password-input"
          type="password"
          placeholder="Password"

          value={this.state.values.password}
          onChange={this.handlePasswordChange}
          errorMessage={this.state.errors.password}
        />
        { confirmPassword &&
          <FormInput
            label="Confirm password"
            className={styles.passwordInput}
            id="confirm-password-input"
            type="password"
            placeholder="Confirm password"

            value={this.state.values.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            errorMessage={this.state.errors.confirmPassword}
          />
        }
        <button
          className={styles.buttonCreateAccount}
          onClick={this.handleSubmit}
        >
          {buttonMessage}
        </button>
      </React.Fragment>
    );
  }
}

Form.propTypes = {
  confirmPassword: PropTypes.bool.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
