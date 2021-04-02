import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createMaterials, getMaterials, deleteMaterials } from '../../api/AllCategories/material';
import CategoryForm from './createcategory';

const CreateMaterials = () => {

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  // state for each materials
  const [materials, setMaterials] = useState([]);
  const [name, setName] = useState('');

  const loadMaterials = () => {
    getMaterials().then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        setMaterials(data);
      }
    })
      .catch((err) => console.log(err));
  };

  const destroy = (categoryId) => {
    deleteMaterials(categoryId, user._id, token).then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        toast.info(`Item is deleted !!! `);
        loadMaterials();
      }
    })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadMaterials();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // make request to api to create material
    createMaterials(user._id, token, { name }).then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        toast.success(`${name} is create!!!`);
        setName('');
        loadMaterials();
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

          <h2>creare materiale</h2>

          <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

          <Row>

            <Table striped bordered hover responsive>
              <thead>
                <tr>
                  <th>s no</th>
                  <th>material name</th>
                  <th>delete</th>
                </tr>
              </thead>
              <tbody>
                {materials.map((c, i) => (
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

export default CreateMaterials;
