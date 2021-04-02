import { API } from '../../config';

// CREATE acquisition
export const createAcquisition = (userId, token, acquisition) => {
    return fetch(`${API}/acquisition/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(acquisition),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

// get all acquisition
export const getAcquisition = () => {
    return fetch(`${API}/acquisitions`, {
        method: 'GET',
    })
        .then((response) => {
            // console.log('name : ', response);
            return response.json();
        })
        .catch((err) => console.log(err));
};

// delete acquisition
export const deleteAcquisition = (acquisitionId, userId, token) => {
    return fetch(`${API}/acquisition/${acquisitionId}/${userId}`, {
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