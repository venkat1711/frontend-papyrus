import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getBookform } from '../../../api/AllCategories/bookform';

const Bookform = ({ handleChange, bookform }) => {

    const [values, setValues] = useState({
        Bookform: []
    });

    const loadBookform = () => {
        getBookform()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Bookform');
                } else {
                    setValues({
                        ...values,
                        Bookform: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Bookform'));
    }

    useEffect(() => {
        loadBookform();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('bookform')}
                // defaultValue='Choose...'
                value={bookform}
                required
            >
                <option>Please select a Bookform</option>
                {values.Bookform &&
                    values.Bookform.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Bookform;
