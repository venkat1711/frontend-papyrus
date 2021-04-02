import React from 'react';
import {Row,Col} from 'react-bootstrap';
import './Info.css';
const Bookforminfo = () => {
    return (
        <div>
        <Row>
            <Col sm={12} className=" p-4 ">
                <div className="info_style" >
                <h4>More info of Bookform</h4>
                <p>The possibile search terms are:
                    codex,
                    miniature,
                    offset,
                    roll,
                    sheet</p>
                   <p> <strong>Roll:</strong> three criteria have led us to classify a text as a roll.
                    There are remains of more than one column or the text consists of several fragments, and the back is blank (or has been reused).</p>
                    <p>The text is in a clear literary professional hand, and the back is blank (or has been reused).
                    The editor says explicitly that the text is part of a roll.
                    Only papyri (and rarely parchments) can be rolls. Rotuli are marked as such, most of the other examples are scrolls.</p>
                    <p><strong>Codex:</strong> the text continues on the back. We explicitly mark miniature codices and examples of a codex purpureus as such. Most codices are on parchment, but there are also examples on papyrus. A special type of codex is a set of bound tablets, as can be deduced from the existence of holes.</p>
                    <p><strong>Sheet:</strong> the text is not part of a roll nor of a codex, but was meant to be a single sheet. Ostraca are always called sheets, and single wooden tablets are so as well.</p>
                    <p><strong>Fragment:</strong> the text (or the editor) does not provide enough information to classify the fragment with certainty as a roll or a sheet.</p>
                    <p>we need to get and display available Author and Genre records in our Book form.</p>
                    
                  
                </div>
            </Col>
        </Row>
        </div>
    )
}

export default Bookforminfo;
