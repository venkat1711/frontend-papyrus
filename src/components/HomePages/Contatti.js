import React, { Component, Fragment } from 'react';
import { Row, Col } from "react-bootstrap";

export default class Contatti extends Component {
    render() {
        return (
            <Fragment>
                <Row className="w-100">
                    <Col sm={12} className=" p-4">
                        <h3>Contatti</h3>
                        <div className="w-75">
                            Per segnalare eventuali correzioni o aggiunte sui contenuti del sito si può scrivere a
                    </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
};