import {API} from '../../config';

// CREATE datezone
export const createDatezone = (userId, token, datezone) => {
    return fetch(`${API}/datezone/create/${userId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(datezone),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // get all datezone
  export const getDatezone = () => {
    return fetch(`${API}/datezones`, {
      method: 'GET',
    })
      .then((response) => {
        // console.log('name : ', response);
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  // delete datezone
  export const deleteDatezone = (datezoneId, userId, token) => {
    return fetch(`${API}/datezone/${datezoneId}/${userId}`, {
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