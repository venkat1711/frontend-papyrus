import {API} from '../../config';

// CREATE genere
export const createGenere = (userId, token, genere) => {
    return fetch(`${API}/genere/create/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(genere),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get all genere
  export const getGeneres = () => {
    return fetch(`${API}/generes`, {
      method: 'GET',
    })
      .then((response) => {
        // console.log('name : ', response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  // delete genere
  export const deleteGenere = (genereId, userId, token) => {
    return fetch(`${API}/genere/${genereId}/${userId}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };