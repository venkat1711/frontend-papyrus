import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getFragment } from '../../../api/AllCategories/fragment';

const NoofFragment = ({ handleChange, fragment }) => {

    const [values, setValues] = useState({
        Fragment: []
    });

    const loadFragment = () => {
        getFragment()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Fragment');
                } else {
                    setValues({
                        ...values,
                        Fragment: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Fragment'));
    }

    useEffect(() => {
        loadFragment();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='text'
                onChange={handleChange('fragment')}
                // defaultValue='Choose...'
                value={fragment}
                required
            >
                {/* <option>Please select a Fragment</option>
                {values.Fragment &&
                    values.Fragment.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))} */}
            </Form.Control>
        </Fragment>
    )
}

export default NoofFragment;
