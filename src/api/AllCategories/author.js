import { API } from '../../config';

// CREATE author
export const createAuthor = (userId, token, author) => {
    return fetch(`${API}/author/create/${userId}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(author),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => {
            console.log(err);
        });
};

// get all author
export const getAuthor = () => {
    return fetch(`${API}/authors`, {
        method: 'GET',
    })
        .then((response) => {
            // console.log('name : ', response);
            return response.json();
        })
        .catch((err) => console.log(err));
};

// delete author
export const deleteAuthor = (authorId, userId, token) => {
    return fetch(`${API}/author/${authorId}/${userId}`, {
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