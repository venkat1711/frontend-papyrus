import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getAcquisition } from '../../../api/AllCategories/acquisition';

const Acqusition = ({ handleChange, acquisition }) => {

    const [values, setValues] = useState({
        Acqusition: []
    });

    const loadAcqusition = () => {
        getAcquisition()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Acqusition');
                } else {
                    setValues({
                        ...values,
                        Acqusition: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Acqusition'));
    }

    useEffect(() => {
        loadAcqusition();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('acquisition')}
                // defaultValue='Choose...'
                value={acquisition}
                required
            >
                <option>Please select a Acquisition</option>
                {values.Acqusition &&
                    values.Acqusition.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Acqusition;
