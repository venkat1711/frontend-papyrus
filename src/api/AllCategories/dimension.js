import { API } from '../../config';

// CREATE dimension
export const createDimension = (userId, token, dimension) => {
    return fetch(`${API}/dimension/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(dimension),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

// get all dimension
export const getDimension = () => {
    return fetch(`${API}/dimensions`, {
        method: 'GET',
    })
        .then((response) => {
            // console.log('name : ', response);
            return response.json();
        })
        .catch((err) => console.log(err));
};

// delete dimension
export const deleteDimension = (dimensionId, userId, token) => {
    return fetch(`${API}/dimension/${dimensionId}/${userId}`, {
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