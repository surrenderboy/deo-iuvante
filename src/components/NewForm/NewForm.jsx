import React from 'react';
import PropTypes from 'prop-types';
import FormInput from '../Form/FormInput';
import form from '../Form/form.module.css';

class NewForm extends React.PureComponent {
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
  }

  setErrors() {
    this.setState({
      errors: {
        ...this.errors,
      },
    });
  }

  handleChange(name, event) {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: event.target.value,
      },
    }));
  }

  handleSubmit() {
    if (!this.validatePresence()) return this.setErrors();
    if (this.props.confirmPassword && !this.validatePassword()) return this.setErrors();

    return this.props.onSubmit(this.state.values);
  }

  validatePresence() {
    this.errors = {};

    Object.entries(this.state.values)
      .each(([field, value]) => {
        if (value.trim().length === 0) {
          if (field === 'confirmPassword' && !this.props.confirmPassword) return;

          this.errors[field] = `${field} can't be blank`;
        }
      });

    return Object.keys(this.errors).length === 0;
  }

  validatePassword() {
    if (this.state.values.password === this.state.values.confirmPassword) {
      this.errors = {
        confirmPassword: "Passwords don't match",
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
          className={form.loginInput}
          id="login-input"
          type="text"
          placeholder="LoLLiPoP"

          value={this.state.values.login}
          onChange={this.handleLoginChange}
          errorMessage={this.state.errors.login}
        />
        <FormInput
          label="Password"
          className={form.passwordInput}
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
            className={form.passwordInput}
            id="confirm-password-input"
            type="password"
            placeholder="Confirm password"

            value={this.state.values.confirmPassword}
            onChange={this.handleConfirmPasswordChange}
            errorMessage={this.state.errors.confirmPassword}
          />
        }
        <button
          className={form.buttonCreateAccount}
          onClick={this.handleSubmit}
        >
          {buttonMessage}
        </button>
      </React.Fragment>
    );
  }
}

NewForm.propTypes = {
  confirmPassword: PropTypes.bool.isRequired,
  buttonMessage: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
};
NewForm.defaultProps = {};

export default NewForm;
