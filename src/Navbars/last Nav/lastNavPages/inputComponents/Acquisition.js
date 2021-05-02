import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getAcquisition } from '../../../../api/AllCategories/acquisition';

const Acquisition = ({ handleChange, acquisition }) => {

    const [values, setValues] = useState({
        Acquisition: []
    });

    const loadAcquisition = () => {
        getAcquisition()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Acquisition');
                } else {
                    setValues({
                        ...values,
                        Acquisition: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Acquisition'));
    }

    useEffect(() => {
        loadAcquisition();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                name="acquisition"
                size='md'
                as='select'
                onChange={handleChange}
                value={acquisition}
                required
            >
                <option>Please select</option>
                {values.Acquisition &&
                    values.Acquisition.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Acquisition;
