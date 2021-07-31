import React, { Fragment } from 'react';
import { API } from '../../../config';
import { Card } from 'react-bootstrap';
const download = e => {
  console.log(e.target.href);
  fetch(e.target.href, {
    method: "GET",
    headers: {}
  })
    .then(response => {
      response.arrayBuffer().then(function(buffer) {
        const url = window.URL.createObjectURL(new Blob([buffer]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "image.png"); //or any other extension
        document.body.appendChild(link);
        link.click();
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

const ProfileImage = ({ item,digitalImageLink }) => {
  
  return (
    <Fragment>
      <Card.Img variant="top" src={`${API}/allposts/photo/${item}`} className='my-2'
      width='100%' height='300px' style={{ objectFit: 'cover' }} />
   { digitalImageLink !== '' && <button  type="button" class="btn btn-primary"  download onClick={e => download(e)}>download</button>
}
    </Fragment>
  );
};

export default ProfileImage;