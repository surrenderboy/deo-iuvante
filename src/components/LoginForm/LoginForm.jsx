import React from 'react';
import PropTypes from 'prop-types';

import FormInput from '../FormInput/FormInput';

import styles from './LoginForm.module.css';

class LoginForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string,
    className: PropTypes.string,
    errors: PropTypes.shape({
      username: PropTypes.string,
      password: PropTypes.string,
    }),
  };
  static defaultProps = {
    buttonText: 'Login',
    className: '',
    errors: {},
  };

  constructor(props) {
    super(props);

    this.handleUsernameChange = this.handleChange.bind(this, 'username');
    this.handlePasswordChange = this.handleChange.bind(this, 'password');
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    values: {
      username: '',
      password: '',
    },
    errors: {
      username: '',
      password: '',
    },
  };

  componentWillReceiveProps({ errors }) {
    this.setState(prevState => ({
      errors: {
        ...prevState.errors,
        ...errors,
      },
    }));
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
        username: '',
        password: '',
      },
    });
  }

  handleChange(name, { target }) {
    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: target.value,
      },
    }));
  }

  handleSubmit(event) {
    event.preventDefault();

    if (!this.validatePresence()) {
      this.setErrors();
      return;
    }

    this.clearErrors();
    this.props.onSubmit(this.state.values);
  }

  validatePresence() {
    this.errors = {};

    Object
      .entries(this.state.values)
      .forEach(([field, value]) => {
        if (value.trim().length === 0) {
          this.errors[field] = `${field} can't be blank`;
        }
      });

    return Object.keys(this.errors).length === 0;
  }

  render() {
    const { buttonText, className } = this.props;
    const { values, errors } = this.state;

    return (
      <form className={`${styles.form} ${className}`} onSubmit={this.handleSubmit}>
        <FormInput
          label="Username"
          id="username"
          type="text"
          placeholder="Username"
          value={values.username}
          onChange={this.handleUsernameChange}
          errorMessage={errors.username}
        />
        <FormInput
          label="Password"
          id="password"
          type="password"
          placeholder="Password"
          value={values.password}
          onChange={this.handlePasswordChange}
          errorMessage={errors.password}
        />
        <button
          className={styles.buttonCreateAccount}
          type="submit"
        >
          { buttonText }
        </button>
      </form>
    );
  }
}

export default LoginForm;
