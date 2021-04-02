import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createAuthor, getAuthor, deleteAuthor } from '../../api/AllCategories/author';
import CategoryForm from './createcategory';


const CreateAuthor = () => {


    // destructure user and token from localstorage
    const { user, token } = isAuthenticated();

    // state for each Author
    const [author, setAuthor] = useState([]);
    const [name, setName] = useState('');

    const loadAuthor = () => {
        getAuthor().then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                setAuthor(data);
            }
        })
            .catch((err) => console.log(err));
    };

    const destroy = (categoryId) => {
        deleteAuthor(categoryId, user._id, token).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.error(`Item is deleted !!! `);
                loadAuthor();
            }
        })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        loadAuthor();
        // eslint-disable-next-line
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
        // make request to api to create Author
        createAuthor(user._id, token, { name }).then((data) => {
            if (data.error) {
                toast.error(data.error);
                console.log(data.error);
            } else {
                toast.success(`${name} is create!!!`);
                setName('');
                loadAuthor();
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

                    <h2>creare author</h2>

                    <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

                    <Row>
                        {author.length <= 0 ? `no records found` :
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>s no</th>
                                        <th>material name</th>
                                        <th>delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {author.map((c, i) => (
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

export default CreateAuthor;