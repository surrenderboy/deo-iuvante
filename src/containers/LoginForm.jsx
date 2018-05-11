import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm/LoginForm';
import { signIn, signUp } from '../actions/loginForm';

const mapStateToProps = ({ loginForm }, { isSignIn }) => ({
  errors:
    loginForm.errors.values ||
    (loginForm.errors.base && { password: loginForm.errors.base }),
  buttonText: isSignIn ? 'Sign in' : 'Sign up',
});

const mapDispatchToProps = (dispatch, { isSignIn }) => ({
  onSubmit: values => (
    isSignIn ? dispatch(signIn(values)) : dispatch(signUp(values))
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
