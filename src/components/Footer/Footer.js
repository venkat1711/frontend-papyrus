import React from 'react';
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import './css/footer.css';

const Footer = () => {
    return (
        <footer className="bg-danger  text-center   text-lg-start" >
            <Row className="container p-4 mx-auto">
                <Col sm={12} lg={4} md={4}>
                    <h3 className="text-uppercase">Papyri</h3>
                </Col>
                <Col sm={12} lg={4} md={4}>
                    <h5 className="mb-2 text-uppercase">Information</h5>
                    <ul className="list-unstyled text-capitalize">
                        <li>
                            <Link to='/informazioni' className="text-white">about us</Link>
                        </li>
                        <li>
                            <Link to='/ricerca' className="text-white">ricerca</Link>
                        </li>
                    </ul>
                </Col >

                <Col sm={12} lg={4} md={4}>
                    <h5 className="text-uppercase">Helpfull Links</h5>
                    <ul className="list-unstyled text-capitalize mb-0">
                        <li>
                            <Link to='/privacy' className="text-white">policy privacy</Link>
                        </li>
                        <li>
                            <Link to='/help' className="text-white">help</Link>
                        </li>
                        <li>
                            <Link to='/riviste' className="text-white">riviste</Link>
                        </li>
                        <li>
                            <Link to='/abbreviazioni' className="text-white">abbreviazioni</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <div className="text-center text-white p-2">
                © 2021 Copyright All Rights Reserved
        </div>
        </footer>
    )
};

export default Footer;
