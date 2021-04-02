import React, { useState, useEffect, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import SideNav from './DashboardSideNav';
import { Card, Row } from 'react-bootstrap';
import { isAuthenticated } from '../../api/auth';
import { registerpostListByUserId, deleteRegisterPost } from '../../api/AllPosts/allposts';
import { toast } from 'react-toastify';
import ImageComponent from './imageComponent/image';
import moment from 'moment';

const UserDashboard = (props) => {
    const [state, setState] = useState([]);
    const { user, token } = isAuthenticated();

    const loadPosts = () => {
        registerpostListByUserId(user._id, token)
            .then((data) => {
                if (data.error) {
                    console.log(data.error, 'load list of post by user id');
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
        deleteRegisterPost(postId, user._id, token).then((data) => {
            if (data.error) {
                console.log(data.error);
            } else {
                toast.error('Post is unfollow');
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

                    <h2 className="text-capitalize">registered posts</h2>
                    {state.length < 1 ? <h2 className='text-capitalize text-secondary'>no posts are followed yet</h2> : (
                        <Row className="my-3">
                            <div className='gridBox' >
                                {state.map((c, i) => (
                                    <Card className='my-2' key={i}>
                                        {c.allpostId === null ? (
                                            <Fragment>
                                                <h3>post is deleted by admin</h3>
                                                <div className="btn btn-outline-danger mt-2 ml-2" onClick={() => destroy(c._id)}>unfollow</div>

                                                <Card.Footer>
                                                    <small className="text-muted">Last updated at {moment(c.updatedAt).format('LLL')}</small>
                                                </Card.Footer>
                                            </Fragment>
                                        ) : (
                                                <Fragment>
                                                    <ImageComponent item={c.allpostId._id} />
                                                    <Card.Body>
                                                        <Card.Title id='heading-wrapper'>{c.allpostId.papyrusId === undefined ? '' : c.allpostId.papyrusId}</Card.Title>
                                                        <Card.Text>
                                                            material :{c.allpostId.material === undefined ? '' : c.allpostId.material}, author :{c.allpostId.author === undefined ? 'no data found' : c.allpostId.author}
                                                        </Card.Text>
                                                        <Card.Text> 
                                                            {c.allpostId.genre === undefined ? '' : c.allpostId.genre} 
                              </Card.Text>
                                                        <div className="mx-auto">
                                                            <div onClick={() => props.history.push({
                                                                pathname: '/user/post',
                                                                state: { detail: c.allpostId }
                                                            })} className="btn btn-outline-primary mt-2">Vedere qui</div>
                                                            <div className="btn btn-outline-danger mt-2 ml-2" onClick={() => destroy(c._id)}>unfollow</div>
                                                        </div>
                                                    </Card.Body>
                                                    <Card.Footer>
                                                        <small className="text-muted">Last updated at {moment(c.updatedAt).format('LLL')}</small>
                                                    </Card.Footer>
                                                </Fragment>
                                            )}
                                    </Card>
                                ))}
                            </div>
                        </Row>
                    )}

                </div>
            </div>
        </div>
    );
}

export default withRouter(UserDashboard);
