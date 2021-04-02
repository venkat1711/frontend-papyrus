import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { resetPassword } from '../../api/auth';
import { toast } from 'react-toastify';
import '../forms/css/ForgetPassword.css';
import { Fragment } from 'react';

const ForgetPassword = ({ match }) => {
    const [values, setValues] = useState({
        username: '',
        token: '',
        newPassword: '',
        success: false,
    });

    useEffect(() => {
        let token = match.params.id;
        let { username } = jwt.decode(token);
        // console.log(username);
        if (token) {
            setValues({ ...values, username, token });
        }
        // eslint-disable-next-line
    }, []);

    const { username, newPassword, token, success } = values;

    const onChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(newPassword);
        resetPassword({ newPassword, resetPasswordLink: token }).then((data) => {
            if (data.error) {
                console.log(data.error);
                toast.error(data.error);
            } else {
                setValues({
                    ...values,
                    newPassword: '',
                    success: true
                });
            }
        });
    };
    return (
        <div className='log_form'>
            <div className="EveT_l_center EveT_l_ForgetPasswordForm">
                {success === true ? (
                    <Link to='/login' className='text-center'>
                        <h3>password is successfully changed login account ...</h3>
                    </Link>) :
                    (<Fragment>                <h2>Change Password</h2>
                        <form onSubmit={onSubmit}>
                            <div className="EveT_l_txt_field_FP">
                                <input type="text" disabled value={username} />
                                {/* <span></span>
                        <label>Password</label> */}
                            </div>
                            <div className="EveT_l_txt_field_FP">
                                <input type="password"
                                    name='newPassword'
                                    value={newPassword}
                                    onChange={onChange}
                                    required />
                                <span></span>
                                <label>enter new password</label>
                            </div>
                            <input type='submit' className="EveT_l_link_FP" value='change password' />
                        </form></Fragment>
                    )}
            </div>
        </div>
    )
};

export default ForgetPassword;