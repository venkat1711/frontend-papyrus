import React, { useState, useEffect } from 'react';
import { withRouter } from "react-router-dom";
import SideNav from './DashboardSideNav';
import { Card, Row } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { getPosts, deletePost } from '../../api/AllPosts/allposts';
import ImageComponent from './imageComponent/image';
import { toast } from 'react-toastify';
import moment from 'moment';

const Dashboard = (props) => {
  const [state, setState] = useState([]);
  const { user, token } = isAuthenticated();

  const loadPosts = () => {
    getPosts(10)
      .then((data) => {
        if (data.error) {
          console.log(data.error, 'load allposts');
        } else {
          setState(data);
        }
      })
      .catch((err) => console.log(err, 'error in get all post dashboard'));
  }

  useEffect(() => {
    loadPosts();
    // eslint-disable-next-line
  }, []);

  const destroy = (postId) => {
    deletePost(postId, user._id, token).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        toast.error('Post is deleted');
        loadPosts();
      }
    })
      .catch((err) => console.log(err, 'error in get all Datezone'));
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <SideNav />
        </div>
        <div className="col">
          <Card className="my-2">
            <Card.Body>
              <Card.Title>benvenuta {user.username}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">occupazione</Card.Subtitle>

            </Card.Body>
          </Card>

          <h2 className="text-secondary">recenti posts</h2>
          <select  name="test" id="test">
    <option value="all">All</option>
    <option value="roll">Roll</option>
    <option value="codex">Codex</option>
    <option value="sheet">Sheet</option>
  </select>

          <Row className="my-3">
            <div className="my-3 gridBox">
              {state.map((c, i) => (
                <Card className='my-2' key={c._id}>
                  <ImageComponent item={c._id} />
                  <Card.Body>
                    <Card.Title id='heading-wrapper'>{c.papyrusId === undefined ? '' : c.papyrusId}</Card.Title>
                    <Card.Text>
                      material :{c.material === undefined ? '' : c.material}, author :{c.author === undefined ? '' : c.author}
                    </Card.Text>
                    <Card.Text>
                      {c.genre} {c.inventory}
                    </Card.Text>
                    <div className="mx-auto">
                      <div onClick={() => props.history.push({
                        pathname: '/singlepost',
                        state: { detail: c }
                      })} className="btn btn-outline-primary mt-2">Aperto</div>
                      <div onClick={() => props.history.push({
                        pathname: "/updatepost",
                        state: { detail: c._id }
                      })} className="btn btn-outline-success mt-2 ml-2">aggiorna</div>
                      <div className="btn btn-outline-danger mt-2 ml-2" onClick={() => destroy(c._id)}>Elimina</div>
                    </div>
                  </Card.Body>
                  <Card.Footer>
                    <small className="text-muted">Last updated at {moment(c.updatedAt).format('LLL')}</small>
                  </Card.Footer>
                </Card>
              ))}
            </div>
          </Row>

        </div>
      </div>
    </div>
  );
};

export default withRouter(Dashboard);