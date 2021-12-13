import React from 'react';
import { withRouter } from "react-router-dom";
import { Container, Row, Card } from "react-bootstrap";
import ImageComponent from '../dashboard/imageComponent/image';
import { Fragment } from 'react';
import moment from 'moment';
import '../../App.css';
import { API } from '../../config';

const AllPosts = (props) => {

  const allDetails = () => (
    <Container>
      <Row className="my-3">
        {props.location.state.detail.length > 0 ? (
          <div className="my-3 gridBox">
            {props.location.state.detail.map((c) => (
              <Card className='my-2' key={c._id}>
                {/* <ImageComponent item={c._id} /> */}
                <Fragment>
      <Card.Img variant="top" src={`${API}/allposts/photo/${c._id}`} onClick={() => props.history.push({
                        pathname: '/viewpost/'+c._id,
                        state: { detail: c }
                      })} className='my-2' width='100%' height='300px' style={{ objectFit: 'cover' }} />
    </Fragment>
                <Card.Body>
                  <Card.Title id='heading-wrapper'>{c.papyrusId === undefined ? '' : c.papyrusId}</Card.Title>
                  <Card.Text>
                    material :{c.material === undefined ? '' : c.material}, author :{c.author === undefined ? '' : c.author}
                  </Card.Text>
                  <Card.Text>
                    genre :{c.genre === undefined ? '' : c.genre};
                    </Card.Text>
                  <div className="mx-auto" >
                    <div onClick={() => props.history.push({
                      pathname: '/singlepost',
                      state: { detail: c }
                    })}
                      className="btn btn-outline-primary mt-2">Vedere qui</div>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated at {moment(c.updatedAt).format('LLL')}</small>
                </Card.Footer>
              </Card>
            ))}
          </div>
        ) : 'DATA HAS NOT BEEN CREATED'}
      </Row>
    </Container>
  )

  return (
    <Fragment>
      {allDetails()}
    </Fragment>
  )
}

export default withRouter(AllPosts);
