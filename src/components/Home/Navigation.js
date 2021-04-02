import React, { Fragment, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navigation = () => {

    const [expanded, setExpanded] = useState(false);
    return (
        <Fragment>
            <Navbar expanded={expanded} expand="lg" bg="danger" >
                <Navbar.Brand href="/" id="EveT_l_Brandname">Library</Navbar.Brand>
                <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className=" mr-4 EveT_l_Navlink">
                        <Link to='/' onClick={() => setExpanded(false)} className="nav-link">Home</Link>
                        <Link to='/ricerca' onClick={() => setExpanded(false)} className="nav-link">Ricerca</Link>
                        <Link to='/help' onClick={() => setExpanded(false)} className="nav-link">Help</Link>
                        <Link to='/abbreviazioni' onClick={() => setExpanded(false)} className="nav-link">Abbreviazioni</Link>
                        <Link to='/contatti' onClick={() => setExpanded(false)} className="nav-link">Contatti</Link>
                        <Link to='/riviste' onClick={() => setExpanded(false)} className="nav-link">Riviste</Link>
                        <Link to='/crediti' onClick={() => setExpanded(false)} className="nav-link">Crediti</Link>
                        <Link to='/privacy' onClick={() => setExpanded(false)} className="nav-link">Privacy</Link>
                        <Link to='/informazioni' onClick={() => setExpanded(false)} className="nav-link" >Informazioni</Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </Fragment>
    )
}

export default withRouter(Navigation); 