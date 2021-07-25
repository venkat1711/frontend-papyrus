import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';


const Reused = ({ handleChange, reused }) => {

    const [values, setValues] = useState({
        Reused: [{"name":"This side first"},{"name":"Other side first"},{"name":"back"},{"name":"pallymsest"}]
    });

    // const loadReused = () => {
    //     getReused()
    //         .then((data) => {
    //             if (data.error) {
    //                 console.log(data.error, 'load Reused');
    //             } else {
    //                 setValues({
    //                     ...values,
    //                     Reused: data,
    //                     formData: new FormData(),
    //                 });
    //             }
    //         })
    //         .catch((err) => console.log(err, 'error in get all Reused'));
    // }

    // useEffect(() => {
    //     //loadReused();
    //     // eslint-disable-next-line
    // }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('reused')}
                // defaultValue='Choose...'
                value={reused}
                required
            >
                <option>Please select</option>
                {values.Reused &&
                    values.Reused.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Reused;
