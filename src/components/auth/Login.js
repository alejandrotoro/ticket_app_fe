import React, { useState } from 'react'
import FormInput from '../shared/formInput';
import { Button } from '../shared/button';
import { Link } from 'react-router-dom';

import { validateInputs } from '../../helpers/Helpers';

const Login = () => {
  const [user, setUser] = useState({
    data: {
      username: '',
      password: ''
    }
  });

  const [error, setError] = useState({
    usernameError: '',
    passwordError: ''
  });

  const { username, password } = user.data;
  const { usernameError, passwordError } = error;

  const onLoginUser = e => {
    e.preventDefault();

    const isValid = validateInputs(user.data, setError);

    if(isValid) {
      console.log(user);
    }
  };

  const onChange = e => {
    const { name, value } = e.target;
    const { data } = user;
    setUser({
      data: {
        ...data,
        [name]: value
      }
    });
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={onLoginUser}>
          <h3>Sign In</h3>
          <div className="form-group">
            <FormInput
              type="text"
              name="username"
              label="Username"
              className="form-control"
              placeholder="Enter Username"
              value={username}
              error={usernameError}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <FormInput
              type="password"
              name="password"
              label="Password"
              className="form-control"
              placeholder="Enter Password"
              value={password}
              error={passwordError}
              onChange={onChange}
            />
          </div>
          <Button
            type="submit"
            label="Sign Up"
            className="btn btn-primary btn-block"
          />
          <p className="forgot-password text-right">
            Not yet registered? <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login
