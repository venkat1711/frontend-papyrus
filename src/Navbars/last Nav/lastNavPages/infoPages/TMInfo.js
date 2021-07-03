import React from 'react';
import { Fragment } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';

const TMInfo = () => {
    return (
        <Fragment>
        <Row >
            <Col sm={12} className="p-4">
               
                <div className="info_style">
                <h4>More info of TM</h4>
                <p>You can limit your search chronologically, by default strictly, although you can opt for a flexible search on the disambiguation page. In principle you can use any date expression or range (see lists below), but in the LDAB most texts are only dated by century or centuries.</p>
                <p>A list with examples of predefined ranges (centuries, reigns, dynasties, periods) and specific dates that can be entered succesfully, to be adapted according to your needs</p>
                <p>You can also create custom-made ranges of modern or ancient years, and in one specific way also for centuries</p>
                <p>CE 45 - 56</p>
                <p>15 to 10 BC</p>
                <p>BC 199 to 100</p>
                <p>15 till 10 BC</p>
                </div>
            </Col>
        </Row>
   </Fragment>
    )
}

export default TMInfo;
