import React from 'react'
import { Fragment } from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';

const Inventoryinfo = () => {
    return (
       <Fragment>
            <Row >
                <Col sm={12} className=" p-4 ">
                    
                    <div className="info_style">
                    <h4>More info of Inventory </h4>
                    <p>The place where the text is (or has been) preserved. We normally use the English name of the city followed by a comma and the local name of the collection.</p>
                    <p>Alexandria, Private collection d’Anastasi</p>
                    <p>Altenburg, Staatsarchiv</p>
                    <p>Berlin, Private collection Kortenbeutel</p>
                    <p>Berlin, Private collection Mosse</p>
                    <p>Cambridge, Westminster College</p>
                    <p>Chicago, Private collection Goodspeed</p>
                        
                    <p>You may also just use the placename  if you are looking for a specific text, e.g. London. For all texts preserved in a city or a country, please use the name of the city of a country only.</p>
                    </div>
                </Col>
            </Row>

       </Fragment>
    )
}

export default Inventoryinfo;
