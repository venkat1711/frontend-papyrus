import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getInventory } from '../../../api/AllCategories/inventory';

const Inventory = ({ handleChange, inventory }) => {

    const [values, setValues] = useState({
        Inventory: []
    });

    const loadInventory = () => {
        getInventory()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Inventory');
                } else {
                    setValues({
                        ...values,
                        Inventory: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Inventory'));
    }

    useEffect(() => {
        loadInventory();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('inventory')}
                // defaultValue='Choose...'
                value={inventory}
                required
            >
                <option>Please select a Inventory</option>
                {values.Inventory &&
                    values.Inventory.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Inventory;
