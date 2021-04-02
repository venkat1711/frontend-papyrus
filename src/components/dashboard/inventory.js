import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createInventory, getInventory, deleteInventory } from '../../api/AllCategories/inventory';
import CategoryForm from './createcategory';

const Createinventory = (props) => {

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    // state for each inventory
    const [inventory, setInventory] = useState([]);
    const [name, setName] = useState('');

    const loadInventory = () => {
        getInventory().then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setInventory(data);
            }
        })
            .catch((err) => console.log(err));
    };

    const destroy = (categoryId) => {
        deleteInventory(categoryId, user._id, token).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.info(`Item is deleted !!! `);
                loadInventory();
            }
        })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadInventory();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // make request to api to create inventory
        createInventory(user._id, token, { name }).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`${name} is create!!!`);
                setName('');
                loadInventory();
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

                <div className="col">
                    <h2>creare inventory</h2>
                    <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

                    <Row>
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr>
                                    <th>s no</th>
                                    <th>inventory name</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {inventory.map((c, i) => (
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
                    </Row>
                </div>

            </div>
        </div>
    );

};

export default Createinventory;
