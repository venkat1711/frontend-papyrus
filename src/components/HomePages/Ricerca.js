import React from 'react';
import { Row, Col } from "react-bootstrap";
import RicercaForm from '../../Navbars/last Nav/lastNavPages/RicercaForm';

const Ricerca = () => {
    return (
        <div>
            <Row>
                <Col className="pt-4">
                    <RicercaForm />
                </Col>
            </Row>
        </div>
    )
};

export default Ricerca;
