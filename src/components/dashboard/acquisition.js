import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createAcquisition, getAcquisition, deleteAcquisition } from '../../api/AllCategories/acquisition';
import CategoryForm from './createcategory';

const CreateAcquisition = () => {

    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    // state for each acquisition
    const [acquisition, setAcquisition] = useState([]);
    const [name, setName] = useState('');

    const loadAcquisition = () => {
        getAcquisition().then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setAcquisition(data);
            }
        })
            .catch((err) => console.log(err));
    };

    const destroy = (categoryId) => {
        deleteAcquisition(categoryId, user._id, token).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.info(`Item is deleted !!! `);
                loadAcquisition();
            }
        })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAcquisition();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // make request to api to create acquisition
        createAcquisition(user._id, token, { name }).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`${name} is create!!!`);
                setName('');
                loadAcquisition();
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

                    <h2>creare acquisition</h2>

                    <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

                    <Row>
                        {acquisition.length <= 0 ? `` :

                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>s no</th>
                                        <th>acquisition name</th>
                                        <th>delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {acquisition.map((c, i) => (
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

export default CreateAcquisition;
