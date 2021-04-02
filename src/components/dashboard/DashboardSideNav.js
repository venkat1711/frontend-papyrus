import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { isAuthenticated } from '../../api/auth';

const AdminNav = () => {
    const { user } = isAuthenticated();

    return (
        <nav>
            <ul className="nav flex-column">
                {user && user.role === 1 ? (
                    <Fragment>
                        <li className="nav-item">
                            <Link to="/admin/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/datazione" className="nav-link">Datazione</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/provenienza" className="nav-link">Find Place</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/materiale" className="nav-link">Materiale</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/genere" className="nav-link">Genere letterario</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/inventory" className="nav-link">Inventory</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/acquisition" className="nav-link">Acquisition</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/bookform" className="nav-link">Bookform</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/fragments" className="nav-link">Number of Fragments</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/author" className="nav-link">author</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/crearepost" className="nav-link">creare post(scoperte)</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin/accounts" className="nav-link">creare Admin Accounts</Link>
                        </li>
                    </Fragment>
                ) : <Fragment>
                        <li className="nav-item">
                            <Link to="/user/dashboard" className="nav-link">Dashboard</Link>
                        </li>
                    </Fragment>}
                <li className="nav-item">
                    <Link to={`/update/profile/${user._id}`} className="nav-link">edit profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
