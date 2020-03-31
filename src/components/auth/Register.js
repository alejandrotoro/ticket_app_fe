import React from 'react';
import './Auth.css';

import FormInput from '../shared/formInput';
import { RadioInput } from '../shared/radioInput';
import { Button } from '../shared/button';
import { Link } from 'react-router-dom';

function Register() {

  const onChange = () => {};

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign Up</h3>
          <div className="form-group">
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
          </div>
          <div className="form-group">
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
          </div>
          <div className="form-group">
            <label>Role</label><br />
            <div className="form-check form-check-inline">
              <RadioInput
                id="inlineRadio1"
                name="role"
                labelClassName="form-check-label"
                className="form-check-input"
                value="User"
                error="You need to enter a valid password"
                onChange={onChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <RadioInput
                id="inlineRadio2"
                name="role"
                labelClassName="form-check-label"
                className="form-check-input"
                value="Admin"
                error="You need to enter a valid password"
                onChange={onChange}
              />
            </div>
          </div>
          <Button
            type="submit"
            label="Sign Up"
            className="btn btn-primary btn-block"
          />
          <p className="forgot-password text-right">
            Already registered? <Link to={"/sign-in"}>Sign In</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Register
