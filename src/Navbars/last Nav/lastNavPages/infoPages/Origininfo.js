import React from 'react';
import { Fragment } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';


const Origininfo = () => {
    return (
        <Fragment>
        <Row >
            <Col sm={12} className="p-4">
                
                <div className="info_style">
                <h4>More info of Origin</h4>
                <p>The place where a text was found or written. You can use modern countries, ancient regions and provinces (see lists below), or names of ancient or modern cities (no list available because too numerous, but we should have plenty of variants for each toponym).</p>
                <p>It is currently not possible to distinguish place of writing from find place in searches. For literary texts more than other, the two do not need to be identical. For school texts and paraliterary texts we have assumed they are, and manuscripts in which reuse is involved have been assigned to the place where the documentary texts was written.</p>
                <p>Egyptian names (and regions outside the name system; roughly 3rd cent. BC)</p>
                <p>Roman regions and origins (2nd century AD).</p>
                <p>Ancient regions (3rd century BC)</p>
                <p>Modern countries</p>
                </div>
            </Col>
        </Row>
   </Fragment>
    )
}

export default Origininfo;
