import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createCartonnage, getCartonnage, deleteCartonnage } from '../../api/AllCategories/cartonnage';
import CategoryForm from './createcategory';


const CreateCartonnage = () => {

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    // state for each cartonnage
    const [cartonnage, setCartonnage] = useState([]);
    const [name, setName] = useState('');

    const loadCartonnage = () => {
        getCartonnage().then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setCartonnage(data);
            }
        })
            .catch((err) => console.log(err));
    };

    const destroy = (categoryId) => {
        deleteCartonnage(categoryId, user._id, token).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.error(`Item is deleted !!! `);
                loadCartonnage();
            }
        })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadCartonnage();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // make request to api to create Cartonnage
        createCartonnage(user._id, token, { name }).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`${name} is create!!!`);
                setName('');
                loadCartonnage();
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

                    <h2>creare cartonnage</h2>

                    <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

                    <Row>
                        {cartonnage.length <= 0 ? `no records found` :
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>s no</th>
                                        <th>material name</th>
                                        <th>delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartonnage.map((c, i) => (
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

export default CreateCartonnage;