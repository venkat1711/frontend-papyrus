import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getMaterials } from '../../../api/AllCategories/material';

const Materials = ({ handleChange, material }) => {

    const [values, setValues] = useState({
        Materials: [],
    });

    const loadMaterials = () => {
        getMaterials()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Datezone');
                } else {
                    setValues({
                        ...values,
                        Materials: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Datezone'));
    }

    useEffect(() => {
        loadMaterials();
        // eslint-disable-next-line
    }, []);

    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('material')}
                // defaultValue='Choose...'
                value={material}
                required
            // multiple
            >
                <option>Please select</option>
                {values.Materials &&
                    values.Materials.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>

    )
}

export default Materials;
