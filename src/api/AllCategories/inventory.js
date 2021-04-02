import { API } from '../../config';

// CREATE inventory
export const createInventory = (userId, token, inventory) => {
    return fetch(`${API}/inventory/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(inventory),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

// get all inventory
export const getInventory = () => {
    return fetch(`${API}/inventorys`, {
        method: 'GET',
    })
        .then((response) => {
            // console.log('name : ', response);
            return response.json();
        })
        .catch((err) => console.log(err));
};

// delete inventory
export const deleteInventory = (inventoryId, userId, token) => {
    return fetch(`${API}/inventory/${inventoryId}/${userId}`, {
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