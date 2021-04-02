import React, { useState, useEffect } from 'react';
import SideNav from './DashboardSideNav';
import { toast } from 'react-toastify';
import { Row, Table } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { createGenere, getGeneres, deleteGenere } from '../../api/AllCategories/genere';
import CategoryForm from './createcategory';

const CreateGenere = () => {

  // destructure user and token from localstorage
  const { user, token } = isAuthenticated();

  // state for each generes
  const [generes, setGeneres] = useState([]);
  const [name, setName] = useState('');

  const loadGeneres = () => {
    getGeneres().then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        setGeneres(data);
      }
    })
      .catch((err) => console.log(err));
  };

  const destroy = (categoryId) => {
    deleteGenere(categoryId, user._id, token).then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        toast.info(`Item is deleted !!! `);
        loadGeneres();
      }
    })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadGeneres();
    // eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(name);
    // make request to api to create generes
    createGenere(user._id, token, { name }).then((data) => {
      if (data.error) {
        toast.error(data.error);
        console.log(data.error);
      } else {
        toast.success(`${name} is create!!!`);
        setName('');
        loadGeneres();
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

          <h2>creare genere lett.</h2>

          <CategoryForm handleSubmit={handleSubmit} name={name} setName={setName} />

          <Row>
            {generes.length <= 0 ? `no records found` :

              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>s no</th>
                    <th>generes name</th>
                    <th>delete</th>
                  </tr>
                </thead>
                <tbody>
                  {generes.map((c, i) => (
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

export default CreateGenere;
