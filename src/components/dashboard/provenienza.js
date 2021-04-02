import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createProvenienza, getProvenienzas, deleteProvenienza } from '../../api/AllCategories/provenienza';
import CategoryForm from './createcategory';

const CreateProvenienza = () => {

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  // state for each provenienzas
  const [provenienzas, setProvenienzas] = useState([]);
  const [name, setName] = useState('');

  const loadProvenienzas = () => {
    getProvenienzas().then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        setProvenienzas(data);
      }
    })
      .catch((err) => console.log(err));
  };

  const destroy = (categoryId) => {
    deleteProvenienza(categoryId, user._id, token).then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        toast.info(`Item is deleted !!! `);
        loadProvenienzas();
      }
    })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadProvenienzas();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // make request to api to create Provenienza
    createProvenienza(user._id, token, { name }).then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        toast.success(`${name} is create!!!`);
        setName('');
        loadProvenienzas();
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

          <h2>creare provenienza</h2>

          <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

          <Row>
            {provenienzas.length <= 0 ? `no records found` :
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>s no</th>
                    <th>origin name</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {provenienzas.map((c, i) => (
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

export default CreateProvenienza;