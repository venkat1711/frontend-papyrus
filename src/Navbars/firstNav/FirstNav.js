import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, signout } from '../../api/auth';
import './FirstNav.css';

const FirstNav = ({ history }) => {

    const { user } = isAuthenticated();
    return (

        <Navbar style={{ background: 'brown', fontWeight: 'bold' }}>
            <Container fluid>
                <Navbar.Brand className="EveT_l_Navbar_FN" href="/">LitPapArs Progetto</Navbar.Brand>

                {isAuthenticated() && user.role === 0 ? (
                    <Link to='/user/dashboard' style={{ color: '#fff' }}>Dashboard</Link>
                ) : null}

                {isAuthenticated() && user.role !== 0 ? (
                    <Link to='/admin/dashboard' style={{ color: '#fff' }}>Dashboard</Link>
                ) : null}

                {!isAuthenticated() && (
                    <Link to='/login' className="EveT_l_login_FN">Login</Link>
                )}

                {isAuthenticated() && (
                    <Nav.Link className="mr-4" >
                        <span style={{ cursor: 'pointer', color: '#ffffff' }}
                            onClick={() => signout(() => history.push('/'))}
                        >
                            disconnettersi
                        </span>
                    </Nav.Link>
                )}
            </Container>
        </Navbar>
    );
};

export default withRouter(FirstNav);
