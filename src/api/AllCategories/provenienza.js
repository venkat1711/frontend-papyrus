import { API } from '../../config';

// CREATE provenienza
export const createProvenienza = (userId, token, provenienza) => {
  return fetch(`${API}/provenienza/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(provenienza),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all provenienza
export const getProvenienzas = () => {
  return fetch(`${API}/provenienzas`, {
    method: 'GET',
  })
    .then((response) => {
      // console.log('name : ', response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete provenienza
export const deleteProvenienza = (provenienzaId, userId, token) => {
  return fetch(`${API}/provenienza/${provenienzaId}/${userId}`, {
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