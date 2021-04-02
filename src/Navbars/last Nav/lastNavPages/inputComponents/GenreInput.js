import React, { Fragment, useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { getGeneres } from '../../../../api/AllCategories/genere';

const GenreInput = ({ handleChange, genre }) => {

    const [values, setValues] = useState({
        Genre: []
    });

    const loadGenre = () => {
        getGeneres()
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load Genre');
                } else {
                    setValues({
                        ...values,
                        Genre: data,
                        formData: new FormData(),
                    });
                }
            })
            .catch((err) => console.log(err, 'error in get all genre'));
    }

    useEffect(() => {
        loadGenre();
        // eslint-disable-next-line
    }, []);


    return (
        <Fragment>
            <Form.Control
                name='genre'
                size='md'
                as='select'
                onChange={handleChange}
                value={genre}
                required
            >
                <option>Please select a Genre</option>
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

export default GenreInput;
