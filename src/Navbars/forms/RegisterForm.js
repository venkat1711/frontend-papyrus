import React, { useState } from 'react';
import '../forms/css/RegisterForm.css';
import { Link } from 'react-router-dom';
import { signup } from '../../api/auth';
import { toast } from 'react-toastify';

const RegisterForm = () => {

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { username, email, password } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //   setUser({ ...user});
    //   console.log(user)
    signup({ username, email, password }).then((data) => {
      if (data.error) {
        console.log(data.error);
        toast.error(data.error);
      } else {
        setUser({
          ...user,
          username: '',
          email: '',
          password: '',
        });
        toast.success('Your account is created. Please signin');
      }
    })
      .catch((err) => console.log(err));
  };

  return (
    <div className='log_form my-4'>
      <div className="EveT_l_center EveT_l_RegisterForm mt-3">
        <h2>Fill Details To Register</h2>
        <form onSubmit={onSubmit}>
          <div className="EveT_l_txt_field_RF">
            <input type="text"
              name='username'
              value={username}
              onChange={onChange}
              required />
            <span></span>
            <label>Name</label>
          </div>
          <div className="EveT_l_txt_field_RF">
            <input type="email"
              name='email'
              value={email}
              onChange={onChange}
              required />
            <span></span>
            <label>Email</label>
          </div>
          <div className="EveT_l_txt_field_RF">
            <input type="password"
              name='password'
              password='password'
              value={password}
              onChange={onChange}
              required />
            <span></span>
            <label>Password</label>
          </div>
          <input type="submit" value="Register" />
          <div className="EveT_l_back_link">
            Already a Member? <Link to="/login" className="float-right text-danger">
              Back to Login
                                </Link>
          </div>

        </form>
      </div>
    </div>
  )
};

export default RegisterForm;