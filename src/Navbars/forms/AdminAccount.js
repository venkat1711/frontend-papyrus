import React, { useState } from 'react';
import SideNav from '../../components/dashboard/DashboardSideNav';
import { signup } from '../../api/auth';
import '../forms/css/RegisterForm.css';
import { toast } from 'react-toastify';

const AdminAccount = () => {

    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        role: 1
    });

    const { username, email, password, role } = user;

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        signup({ username, email, password, role }).then((data) => {
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
                toast.success('New admin account is created');
            }
        })
            .catch((err) => console.log(err));
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />
                </div>

                <div className="col-md-8">
                    <div className='log_form my-4'>
                        <div className="EveT_l_center EveT_l_RegisterForm mt-3">
                            <h2>Register Admin Account</h2>
                            <form onSubmit={onSubmit}>
                                <div className="EveT_l_txt_field_RF">
                                    <input type="text"
                                        name='username'
                                        value={username}
                                        onChange={onChange}
                                        required />
                                    <span></span>
                                    <label>UserName</label>
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
                                <input type="submit" value="add admin" />
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default AdminAccount;