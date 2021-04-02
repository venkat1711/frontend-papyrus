import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getAuthor } from '../../../api/AllCategories/author';

const Author = ({ handleChange, author }) => {

    const [values, setValues] = useState({
        Author: []
    });

    const loadAuthor = () => {
        getAuthor()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Author');
                } else {
                    setValues({
                        ...values,
                        Author: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all Author'));
    }

    useEffect(() => {
        loadAuthor();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                size='md'
                as='select'
                onChange={handleChange('author')}
                // defaultValue='Choose...'
                value={author}
                required
            >
                <option>Please select a Author</option>
                {values.Author &&
                    values.Author.map((c, i) => (
                        <option key={i} value={c.name}>
                            {c.name}
                        </option>
                    ))}
            </Form.Control>
        </Fragment>
    )
}

export default Author;
