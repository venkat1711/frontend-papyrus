import React, { useState, useEffect } from 'react';
import { update, updateUser, isAuthenticated, read } from '../../api/auth';
import SideNav from '../dashboard/DashboardSideNav';
import { toast } from 'react-toastify';

const UpdateProfile = ({ match }) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const { email, password } = user;
    const { token } = isAuthenticated();

    const init = (userId) => {
        read(userId, token).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setUser({
                    ...user,
                    email: data.email,
                    password: data.password,
                });
            }
        }).catch((err) => console.log(err, 'err in update profile'));
    };

    useEffect(() => {
        init(match.params.profileId);
        // eslint-disable-next-line
    }, []);

    const onChange = (name) => (e) => {
        setUser({ ...user, [name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        update(match.params.profileId, token, {
            email,
            password,
        }).then((data) => {
            if (data.error) {
                console.log(data.error);
                toast.error(data.error);
            } else {
                updateUser(data, () => {
                    setUser({
                        ...user,
                        email: data.email,
                        password: data.password,
                    })
                    toast.success('profile is updated');
                }).catch((err) => console.log(err, 'err in update profile in local storage'));
            }
        }).catch((err) => console.log(err));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />
                </div>

                <div className="col-md-8">
                    <div className='log_form my-4'>
                        <div className="EveT_l_center EveT_l_LoginForm">
                            <h2>Update profile</h2>
                            <form onSubmit={onSubmit} className="">
                                <div className="EveT_l_txt_field">
                                    <input type="email"
                                        name='email'
                                        value={email}
                                        onChange={onChange('email')}
                                        required />
                                    <span></span>
                                    <label>Email</label>
                                </div>
                                <div className="EveT_l_txt_field">
                                    <input type="password"
                                        name='password'
                                        value={password}
                                        onChange={onChange('password')}
                                        required />
                                    <span></span>
                                    <label>Password</label>
                                </div>
                                <input type="submit" value="submit" />


                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default UpdateProfile;