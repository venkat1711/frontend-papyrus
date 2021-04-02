import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createBookform, getBookform, deleteBookform } from '../../api/AllCategories/bookform';
import CategoryForm from './createcategory';

const CreateBookform = () => {

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    // state for each bookform
    const [bookform, setBookform] = useState([]);
    const [name, setName] = useState('');

    const loadBookform = () => {
        getBookform().then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setBookform(data);
            }
        })
            .catch((err) => console.log(err));
    };

    const destroy = (categoryId) => {
        deleteBookform(categoryId, user._id, token).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.error(`Item is deleted !!! `);
                loadBookform();
            }
        })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadBookform();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // make request to api to create bookform
        createBookform(user._id, token, { name }).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`${name} is create!!!`);
                setName('');
                loadBookform();
            }
        })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <SideNav />
                </div>

                <div className="col-md-10">

                    <h2>creare bookform</h2>

                    <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

                    <Row>
                        {bookform.length <= 0 ? `no records found` :
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>s no</th>
                                        <th>material name</th>
                                        <th>delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {bookform.map((c, i) => (
                                        <tr key={i}>
                                            <td>{i + 1}</td>
                                            <td>{c.name}</td>
                                            <td>
                                                <span
                                                    onClick={() => destroy(c._id)}
                                                    className='btn btn-outline-danger '
                                                >
                                                    Delete
                                        </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        }

                    </Row>

                </div>
            </div>
        </div>
    );
};

export default CreateBookform;