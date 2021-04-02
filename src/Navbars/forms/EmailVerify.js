import React, { Fragment, useState } from 'react';
import { forgotPassword } from '../../api/auth';
import { toast } from 'react-toastify';
import '../forms/css/Emailverify.css';

const EmailVerify = () => {
    const [values, setValues] = useState({
        email: '',
    });

    const { email } = values;

    const onChange = (e) =>
        setValues({ ...values, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        forgotPassword({ email }).then((data) => {
            if (data.error) {
                console.log(data.error);
                toast.error(data.error);
            } else {
                setValues({
                    ...values,
                    email: '',
                });
                toast.success(`Request password reset link sent to ${email} mail check it out!`);
            }
        })
            .catch((err) => console.log(err));
    };
    return (
        <Fragment>
            <div className="EveT_l_center EveT_l_LoginForm">
                <h2>Email Verification</h2>
                <form onSubmit={onSubmit} >
                    <div className="EveT_l_txt_field">
                        <input type="email"
                            name='email'
                            value={email}
                            onChange={onChange}
                            required />
                        <span></span>
                        <label>Email</label>
                    </div>
                    <input type="submit" value="Verify  Email" />
                </form>
            </div>
        </Fragment>

    )
};
export default EmailVerify;