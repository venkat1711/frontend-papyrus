import React from 'react';
import { Fragment } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';

const Materialinfo = () => {
    return (
        <Fragment>
        <Row >
            <Col sm={12} className="p-4">  
                <div className="info_style">
                <h4>More info of Materials</h4>
                <p>The material on which the text is written, most papyrus or parchment. This is an exhaustive list for the LDAB</p>
                <p>bone</p>
                <p> clay (mudbrick)</p>
                <p>ivory</p>
                <p>metal (lead)</p>
                <p>metal (copper)</p>
                <p> paper</p>
                <p> clay</p>
                <p>papyrus</p>
                <p>cloth (linen)</p>
                </div>
            </Col>
        </Row>
   </Fragment>
       
    )
}
export default Materialinfo;
