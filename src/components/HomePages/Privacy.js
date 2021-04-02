import React, { Component, Fragment } from 'react';
import { Row, Col } from "react-bootstrap";

export default class Privacy extends Component {
    render() {
        return (
            <Fragment>
                <Row className="w-100 m-4">
                    <Col sm={12} >
                        <h3>Dati di navigazione</h3>
                        <div className="w-75">
                            <p>I sistemi informatici e le procedure software preposte al funzionamento di questo sito web acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet.</p>

                            <p>Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.</p>

                            <p>In questa categoria di dati rientrano gli indirizzi IP o i nomi di dominio dei computer utilizzati dagli utenti che si connettono al sito, gli indirizzi in notazione URL (Uniform Resource Locator) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server (buon fine, errore, ecc.) e altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.</p>

                            <p>Questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del sito e per controllarne il corretto funzionamento.</p>

                            <p>I dati in questione potrebbero essere, inoltre, utilizzati, su richiesta della competente autorità giudiziaria e con le garanzie disposte dalla legge, per l'accertamento di responsabilità in caso di eventuali reati informatici commessi ai danni del sito.</p>

                        </div>
                    </Col>
                </Row>
            </Fragment>
        )
    }
};