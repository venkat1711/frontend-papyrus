import React, { Fragment } from 'react';
import { API } from '../../../config';
import { Card } from 'react-bootstrap';

const ProfileImage = ({ item }) => {
  return (
    <Fragment>
      <Card.Img variant="top" src={`${API}/allposts/photo/${item}`} className='my-2' width='100%' height='300px' style={{ objectFit: 'cover' }} />
    </Fragment>
  );
};

export default ProfileImage;