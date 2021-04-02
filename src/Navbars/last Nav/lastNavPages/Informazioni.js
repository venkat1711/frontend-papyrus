import React from 'react';
import { Row, Col } from 'react-bootstrap';


const Informazioni = () => {
    return ( 
        <div className='p-4'>
            <Row >

                <Col sm={9} className=" p-4">
                    <h3>Criteri per la descrizione
                    </h3>
                    <div className="w-90">
                        <h3>CRITERI ADOTTATI PER LA DESCRIZIONE</h3>

                        <h4>Descrizione:</h4>
                        <p>Autore, opera e generi letterari</p>
                        <p>Sono riportati in latino e per esteso secondo i criteri del Thesaurus Linguae Graecae, ad eccezione delle opere i cui autori e contenuti non sono stati identificati. In questo caso sono state utilizzate le definizioni in lingua italiana.</p>

                        <p>Dimensioni</p>
                        <p>Sono espresse in cm (L/H). Se i frammenti originari sono stati ricomposti in sede di restauro in una unità, si riportano le dimensioni del frammento ricostruito.</p>

                        <p>Recto/Verso</p>
                        <p>Sono lasciati in bianco quando la tipologia libraria è quella del codice.</p>

                        <p>Condizioni attuali</p>
                        <p>Frammenti</p>
                        <p>Viene sempre dato il numero complessivo dei frammenti riferibili allo stesso rotolo o allo stesso codice, anche quando ci si trovi di fronte a casi in cui i frammenti conservati nella BML si devono ricongiungere a frammenti conservati in altre biblioteche.</p>

                    </div>
                </Col>
             
            </Row>
            
        </div>

        
        
    )

};
export default Informazioni;