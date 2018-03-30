import React from 'react';
import PropTypes from 'prop-types';
import FormInput from './FormInput';
import form from './form.module.css';

const SignInOrUpForm =
    ({
      createNewUserState,
      onLoginChangeValue,
      onPasswordChangeValue,
      onConfirmPasswordChangeValue,
      loginValidationState,
      passwordValidationState,
      confirmPasswordValidationState,
      passwordsMatchValidationState,
      onSubmitSignIn,
      onSubmitSignUp,
      onSubmitCreateAccount,
    }) =>
      (
        <React.Fragment>
          {!createNewUserState &&
          <p className={form.formTitle}>Sign in to <span className={form.titleDeoIuvante}>Deo-iuvante</span></p>
          }
          {createNewUserState &&
          <p className={form.formTitle}>Create your account</p>
          }
          <FormInput
            onChangeValue={onLoginChangeValue}
            label="Login"
            className={form.loginInput}
            id="login-input"
            type="text"
            placeholder="LoLLiPoP"
            validationStateForEmpty={loginValidationState}
            errorMessageForEmpty="Login can't be blank"
          />
          <FormInput
            onChangeValue={onPasswordChangeValue}
            label="Password"
            className={form.passwordInput}
            id="password-input"
            type="password"
            placeholder="Password"
            validationStateForEmpty={passwordValidationState}
            errorMessageForEmpty="Password can't be blank"
          />
          {!createNewUserState &&
          <React.Fragment>
            <button
              className={form.buttonSignIn}
              onClick={onSubmitSignIn}
            >Sign in
            </button>
            <p className={form.formCreateAcc}>
                        New to Deo-iuvante?
              <button
                className={form.buttonSignUp}
                onClick={onSubmitSignUp}
              >Create an account
              </button>
            </p>
          </React.Fragment>
          }
          {createNewUserState &&
          <React.Fragment>
            <FormInput
              onChangeValue={onConfirmPasswordChangeValue}
              label="Confirm password"
              className={form.passwordInput}
              id="password-input"
              type="password"
              placeholder="Confirm password"
              validationStateForEmpty={confirmPasswordValidationState}
              passwordsMatchValidationState={passwordsMatchValidationState}
              errorMessageForEmpty="Confirm your password"
              errorMessageDidntMatchPasswords="Those passwords didn't match. Try again."
            />
            <button
              className={form.buttonCreateAccount}
              onClick={onSubmitCreateAccount}
            >Create an account
            </button>
          </React.Fragment>
          }
        </React.Fragment>);

SignInOrUpForm.propTypes = {
  createNewUserState: PropTypes.bool.isRequired,
  onLoginChangeValue: PropTypes.func.isRequired,
  onPasswordChangeValue: PropTypes.func.isRequired,
  loginValidationState: PropTypes.bool.isRequired,
  passwordValidationState: PropTypes.bool.isRequired,
  onConfirmPasswordChangeValue: PropTypes.func.isRequired,
  confirmPasswordValidationState: PropTypes.bool.isRequired,
  passwordsMatchValidationState: PropTypes.bool.isRequired,
  onSubmitSignIn: PropTypes.func.isRequired,
  onSubmitSignUp: PropTypes.func.isRequired,
  onSubmitCreateAccount: PropTypes.func.isRequired,
};

export default SignInOrUpForm;
