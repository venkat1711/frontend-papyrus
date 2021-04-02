import { API } from '../../config';

// CREATE Materials
export const createMaterials = (userId, token, material) => {
  return fetch(`${API}/material/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(material),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// get all Materials
export const getMaterials = () => {
  return fetch(`${API}/materials`, {
    method: 'GET',
  })
    .then((response) => {
      // console.log('name : ', response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

// delete Materials
export const deleteMaterials = (materialId, userId, token) => {
  return fetch(`${API}/material/${materialId}/${userId}`, {
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