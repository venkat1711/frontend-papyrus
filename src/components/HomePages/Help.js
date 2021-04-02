import React, { Component, Fragment } from 'react';
import { Row, Col } from "react-bootstrap";

export default class Help extends Component {
    render() {
        return (
            <Fragment>
                <Row className="w-100 m-4">
                    <Col sm={12} >
                        <h3>Help</h3>
                        <div className="w-75">
                            Data inizio/Data fine: la datazione viene scelta dall'utente mediante un elenco a discesa; selezionando un valore solo nel campo "data inizio" saranno visualizzati tutti i papiri datati da quel momento in poi; selezionando un valore solo nel campo "data fine" saranno visualizzati tutti i papiri precedenti alla datazione indicata; infine, è possibile visualizzare tutti i papiri compresi in un determinato arco cronologico selezionando un valore in entrambi i campi;
                            Edizione: casella di testo. Restituisce i papiri che contengono nel campo la parola inserita dall'utente. È possibile indicare il numero del volume, in numeri romani, e/o del singolo papiro, in cifre arabe. Ad es., per visualizzare la scheda di PSI XI 1221, si potrà digitare "1221" oppure "XI 1221", ma non "PSI 1221"; ancora, per cercare tutti i papiri contenuti nel volume XIII, si potrà digitare "PSI XIII" oppure soltanto "XIII".
                            Luogo di provenienza: casella di testo. Restituisce i papiri che contengono nel campo la parola inserita dall'utente. I toponimi sono indicati nella loro forma latina (ad es., Hemoupolis Magna, Oxyrhynchus).
                            Luogo di conservazione: casella di testo. Restituisce i papiri che contengono nel campo la parola inserita dall'utente.
                            Materiale: casella di testo. Fa riferimento al materiale scrittorio impiegato: papiro, ostrakon, pergamena
                            Tipologia: casella di testo. Fa riferimento alla tipologia libraria del reperto: rotolo; codice; tavoletta. Può essere utilizzata soltanto per ricerche su papiri di contenuto letterario.
                            Testo libero: casella di testo. Restituisce i papiri che contengono nel campo Note la parola inserita dall'utente.
                    </div>
                        <p className='mt-4'>Il pulsante "Search" avvia la ricerca, il cui esito viene visualizzato nella finestra "Result for", con l'indicazione dei papiri trovati.

                     I risultati vengono mostrati in ordine alfabetico.</p>
                    </Col>
                </Row>
            </Fragment >
        )
    }
};