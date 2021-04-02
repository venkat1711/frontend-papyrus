import { API } from '../../config';

// CREATE cartonnage
export const createCartonnage = (userId, token, cartonnage) => {
    return fetch(`${API}/cartonnage/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cartonnage),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

// get all cartonnage
export const getCartonnage = () => {
    return fetch(`${API}/cartonnages`, {
        method: 'GET',
    })
        .then((response) => {
            // console.log('name : ', response);
            return response.json();
        })
        .catch((err) => console.log(err));
};

// delete cartonnage
export const deleteCartonnage = (cartonnageId, userId, token) => {
    return fetch(`${API}/cartonnage/${cartonnageId}/${userId}`, {
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