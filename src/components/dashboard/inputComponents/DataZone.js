import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getDatezone } from '../../../api/AllCategories/datezone';

const Provenance = ({ handleChange, editiondata }) => {

    const [values, setValues] = useState({
        Genre: []
    });

    const loadGenre = () => {
        getDatezone()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Datezone');
                } else {
                    setValues({
                        ...values,
                        Genre: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Datezone'));
    }

    useEffect(() => {
        loadGenre();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('editiondata')}
                // defaultValue='Choose...'
                value={editiondata}
                required
            >
                <option>Please select a DataZone</option>
                {values.Genre &&
                    values.Genre.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Provenance;
