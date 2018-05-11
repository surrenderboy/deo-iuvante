import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import LoginForm from '../../containers/LoginForm';

import styles from './LoginLayout.module.css';

const renderSignIn = () => (
  <React.Fragment>
    <LoginForm isSignIn />
    <Link className={styles.link} to="/sign-up">Create an account!</Link>
  </React.Fragment>
);

const renderSignUp = () => (
  <React.Fragment>
    <LoginForm />
    <Link className={styles.link} to="/sign-in">Existing account?</Link>
  </React.Fragment>
);

const LoginLayout = () => (
  <div className={styles.layout}>
    <h1 className={styles.title}>Welcome to<br />Deo Iuvante</h1>

    <Switch>
      <Route path="/sign-in" render={renderSignIn} />
      <Route path="/sign-up" render={renderSignUp} />
    </Switch>
  </div>
);

export default LoginLayout;
