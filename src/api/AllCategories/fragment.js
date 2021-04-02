import { API } from '../../config';

// CREATE fragment
export const createFragment = (userId, token, fragment) => {
    return fetch(`${API}/fragment/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(fragment),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

// get all fragment
export const getFragment = () => {
    return fetch(`${API}/fragments`, {
        method: 'GET',
    })
        .then((response) => {
            // console.log('name : ', response);
            return response.json();
        })
        .catch((err) => console.log(err));
};

// delete fragment
export const deleteFragment = (fragmentId, userId, token) => {
    return fetch(`${API}/fragment/${fragmentId}/${userId}`, {
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