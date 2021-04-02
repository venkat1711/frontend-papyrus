import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getDatezone } from '../../../../api/AllCategories/datezone';

const DataZone = ({ handleChange }) => {

    const [values, setValues] = useState({
        DataZone: []
    });

    const loadDataZone = () => {
        getDatezone()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Datezone');
                } else {
                    setValues({
                        ...values,
                        DataZone: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Datezone'));
    }

    useEffect(() => {
        loadDataZone();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                name="dataGt"
                size='md'
                as='select'
                onChange={handleChange}
                defaultValue='Choose...'
                required
            >
                <option>select from</option>
                {values.DataZone &&
                    values.DataZone.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default DataZone;
