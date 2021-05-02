import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getProvenienzas } from '../../../api/AllCategories/provenienza';

const Provenance = ({ handleChange, provenance }) => {

    const [values, setValues] = useState({
        Provenance: []
    });

    const loadProvenance = () => {
        getProvenienzas()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Provenance');
                } else {
                    setValues({
                        ...values,
                        Provenance: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Provenance'));
    }

    useEffect(() => {
        loadProvenance();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('provenance')}
                // defaultValue='Choose...'
                value={provenance}
                required
            >
                <option>Please select</option>
                {values.Provenance &&
                    values.Provenance.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Provenance;
