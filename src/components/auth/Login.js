import React from 'react'
import FormInput from '../shared/formInput';
import { Button } from '../shared/button';
import { Link } from 'react-router-dom';

const Login = () => {

  const onChange = () => {};

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Sign In</h3>
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
