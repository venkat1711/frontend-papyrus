import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { signin, authenticate, isAuthenticated } from '../../api/auth';
import { toast } from 'react-toastify';
import '../forms/css/LoginForm.css';

const LoginForm = () => {
  const [value, setValue] = useState({
    email: '',
    password: '',
    redirectToReferrer: false,
  });

  const { email, password } = value;
  const { user } = isAuthenticated();

  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    signin({ email, password }).then((data) => {
      if (data.error) {
        console.log(data.error);
        toast.error(data.error);
      } else {
        authenticate(data, () => {
          setValue({
            ...value,
            redirectToReferrer: true,
          })
        })
        toast.success('Great !!!');
      }
    })
      .catch((err) => console.log(err));
  };

  const redirectUser = () => {
    if (value.redirectToReferrer) {
      if (user && user.role === 0) {
        return <Redirect to='/user/dashboard' />;
      } else {
        return <Redirect to='/admin/dashboard' />;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to='/' />;
    }
  };

  return (
    <div className='log_form my-4'>
      <div className="EveT_l_center EveT_l_LoginForm">
        <h2>Login</h2>
        <form onSubmit={onSubmit} className="">
          <div className="EveT_l_txt_field">
            <input type="email"
              name='email'
              value={email}
              onChange={onChange}
              required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="EveT_l_txt_field">
            <input type="password"
              name='password'
              value={password}
              onChange={onChange}
              required />
            <span></span>
            <label>Password</label>
          </div>
          <div className="EveT_l_pass">
            <Link to="/emailverify" >
              ForgetPassword?
                </Link>
          </div>
          <input type="submit" value="Login with Email/username" />
          <div className="EveT_l_signup_link">
            Not a Member? <Link to="/register" className="float-right text-danger">
              Register
                  </Link>
          </div>

        </form>
        {redirectUser()}
      </div>
    </div>
  )
};

export default LoginForm;