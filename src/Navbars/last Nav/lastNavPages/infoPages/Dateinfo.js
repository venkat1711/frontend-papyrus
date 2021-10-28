import React from 'react';
import { Fragment } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';

const Dateinfo = () => {
    return (
        <Fragment>
        <Row >
            <Col sm={12} className="p-4">
               
                <div className="info_style">
                <h4>More info of Dates</h4>
                <p>You can limit your search chronologically, by default strictly, although you can opt for a flexible search on the disambiguation page. In principle you can use any date expression or range (see lists below), but in the LDAB most texts are only dated by century or centuries.</p>
                <p>A list with examples of predefined ranges (centuries, reigns, dynasties, periods) and specific dates that can be entered succesfully, to be adapted according to your needs</p>
                <p>You can also create custom-made ranges of modern or ancient years, and in one specific way also for centuries</p>
                <p>CE 45 - 56</p>
                <p>15 to 10 BC</p>
                <p>BC 199 to 100</p>
                <p>15 till 10 BC</p>
                <p>beginning of 2nd BC
                    half of 2nd BC
                    first half of 2nd BC
                    second half of 2nd BC
                    end of 2nd BC</p>
                <p>beginning of 1st c. AD
                    half of 1st c. AD
                    first half of 1st c. AD
                    second half of 1st c. AD
                    end of 1st c. AD</p>
                <p>beginning of 2nd c. AD
                    half of 2nd c. AD
                    first half of 2nd c. AD
                    second half of 2nd c. AD
                    end of 2nd c. AD</p>
                <p>beginning of 3rd c. AD
                    half of 3rd c. AD
                    first half of 3rd c. AD
                    second half of 3rd c. AD
                    end of 3rd c. AD</p>
                <p>beginning of 4th c. AD
                    half of 4th c. AD
                    first half of 4th c. AD
                    second half of 4th c. AD
                    end of 4th c. AD</p>

                </div>
            </Col>
        </Row>
   </Fragment>
    )
}

export default Dateinfo;
