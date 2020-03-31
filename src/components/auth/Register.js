import React from 'react';
import './Auth.css';

import FormInput from '../shared/formInput';

function Register() {

  const onChange = () => {};

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <FormInput
            type="text"
            name="username"
            label="Username"
            className="form-control"
            placeholder="Enter Username"
            value=""
            error="You need to enter a valid username"
            onChange={onChange}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            className="form-control"
            placeholder="Enter Password"
            value=""
            error="You need to enter a valid password"
            onChange={onChange}
          />
        </form>
      </div>
    </div>
  )
}

export default Register
