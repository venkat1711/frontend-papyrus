import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';

const Genereinfo = () => {
    return (
       
    <div>
        <Row >
            <Col sm={12} className="p-4">
                
                <div className="info_style">
                <h4>More info of Genere
                </h4>
                <p>The field <strong>Genre</strong> is a subdivision of the field Culture, with the following possible search criteria.
                    Texts classified in Culture as Literature are divided in poetry and prose. Each of these is further subdivided in the traditional genres, such as epic, lyric, comedy, or tragedy for poetry, and history, philosophy, novel, oratory, or wisdom for prose. The subdivisions are not clear-cut and do not always work outside classical literature.</p>
                    
                  <p><strong>Science </strong>includes subdivisions such as astronomy, grammar, mathematics, medicine, philology, tachygraphy etc. In many instances science and literature are combined, e.g. an edition of Callimachus (literature, lyric) with scholia (science, philology, scholia).</p>

                  <p><strong>Religion </strong>has subdivisions such as prayer, magic, liturgy or theology.</p>
                </div>
            </Col>
        </Row>
    </div>
    )
}

export default Genereinfo;
