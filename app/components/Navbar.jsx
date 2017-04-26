import React, { Component } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Logout from './Logout';
import { loginUser, logoutUser } from '../actions';

export default class Navbar extends Component {
  render() {
    const { dispatch, isAuthenticated, errorMessage } = this.props;
    return (
      <nav className="navbar">
        <div className="container-fluid">
          <div>
            {!isAuthenticated &&
              <Login
                errorMessage={errorMessage}
                onLoginClick={creds => dispatch(loginUser(creds))}
              />}
            {isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />}

            {isAuthenticated && <Dashboard />}

          </div>
        </div>
      </nav>
    );
  }
}
