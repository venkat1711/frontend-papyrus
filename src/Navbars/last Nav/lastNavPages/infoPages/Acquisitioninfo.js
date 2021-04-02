import React from 'react';
import { Fragment } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';

const Acquisitioninfo = () => {
    return (
        <Fragment>
        <Row >
            <Col sm={12} className="p-4">
                <div className="info_style">
                <h4>More info of Acquisition</h4>
                    <p>The definition of an <strong>acquisition</strong> is the act of getting or receiving something, or the item that was received. An example of an acquisition is the purchase of an asset. Simply, An asset or object bought or obtained, typically by a library or museum.</p>
                <p>Purchase</p>
                <p>excavation</p>
                <p>unknown</p>
                
                </div>
            </Col>
        </Row>
   </Fragment>
       
    )
}
export default Acquisitioninfo;
