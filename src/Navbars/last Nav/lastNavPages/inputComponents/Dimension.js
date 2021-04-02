import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getDimension } from '../../../../api/AllCategories/dimension';

const Dimension = ({ handleChange, dimension }) => {

    const [values, setValues] = useState({
        Dimension: []
    });

    const loadDimension = () => {
        getDimension()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Dimension');
                } else {
                    setValues({
                        ...values,
                        Dimension: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Dimension'));
    }

    useEffect(() => {
        loadDimension();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('editiondata')}
                value={dimension}
                required
            >
                <option>Please select a dimension</option>
                {values.Dimension &&
                    values.Dimension.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Dimension;
