import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getCartonnage } from '../../../../api/AllCategories/cartonnage';

const Cartonnage = ({ handleChange, cartonnage }) => {

    const [values, setValues] = useState({
        Cartonnage: []
    });

    const loadCartonnage = () => {
        getCartonnage()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Cartonnage');
                } else {
                    setValues({
                        ...values,
                        Cartonnage: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Cartonnage'));
    }

    useEffect(() => {
        loadCartonnage();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                name="cartonnage"
                size='md'
                as='select'
                onChange={handleChange}
                required
            >
                <option>Please select a Cartonnage</option>
                <option>yes</option>
                <option>no</option>

            </Form.Control>
        </Fragment>
    )
}

export default Cartonnage;
