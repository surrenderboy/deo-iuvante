import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import FormButton from './FormButton';
import form from './form.module.css';

const SignInOrUpForm = props =>
  (
    <React.Fragment>
      {props.signIn &&
        <p className={form.formTitle}>Sign in to <span className={form.titleDeoIuvante}>Deo-iuvante</span></p>
      }
      {props.signUp &&
        <p className={form.formTitle}>Create your account</p>
      }
      <FormInput
        onChangeValue={props.onLoginChangeValue}
        label="Login"
        className={form.loginInput}
        id="login-input"
        type="text"
        placeholder="Login..."
        validationState={props.loginValidationState}
        errorMessage="Login can't be blank"
      />
      <FormInput
        onChangeValue={props.onPasswordChangeValue}
        label="Password"
        className={form.passwordInput}
        id="password-input"
        type="password"
        placeholder="Password"
        validationState={props.passwordValidationState}
        errorMessage="Password can't be blank"
      />
      {props.signIn &&
        <React.Fragment>
          <FormButton
            className={form.buttonSignIn}
            onSubmit={props.onSubmitSignIn}
            text="Sign in"
          />
          <p className={form.formCreateAcc}>
                    New to Deo-iuvante?
            <FormButton
              className={form.buttonSignUp}
              onSubmit={props.onSubmitSignUp}
              text="Create an account"
            />
          </p>
        </React.Fragment>
      }
      {props.signUp &&
        <FormButton
          className={form.buttonCreateAccount}
          text="Create an account"
          onSubmit={props.onSubmitCreateAccount}
        />
      }

    </React.Fragment>);

SignInOrUpForm.propTypes = {
  signIn: PropTypes.bool.isRequired,
  signUp: PropTypes.bool.isRequired,
  onLoginChangeValue: PropTypes.func.isRequired,
  onPasswordChangeValue: PropTypes.func.isRequired,
  loginValidationState: PropTypes.bool.isRequired,
  passwordValidationState: PropTypes.bool.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  onSubmitSignUp: PropTypes.func.isRequired,
  onSubmitCreateAccount: PropTypes.func.isRequired,
};

export default SignInOrUpForm;
