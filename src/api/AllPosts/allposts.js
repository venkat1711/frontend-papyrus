import { API } from '../../config';

// CREATE PosT
export const createPost = (userId, token, post) => {
  return fetch(`${API}/allposts/create/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// get single Post
export const getSinglePost = async (postId) => {
  return await fetch(`${API}/allposts/${postId}`, {
    method: 'GET',
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// getPost
export const getPosts = async (limit) => {
  return await fetch(`${API}/allposts`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ limit }),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// getPosts
export const getPostsCount = () => {
  return fetch(`${API}/allposts/total`, {
    method: 'GET',
  })
    .then((response) => {
      return (response.json(), console.log(response));
    })
    .catch((err) => console.log(err));
};

// updatePost
export const updateSinglePost = (postId, userId, token, post) => {
  return fetch(`${API}/allposts/${postId}/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: post,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};


// deletePost
export const deletePost = (postId, userId, token) => {
  return fetch(`${API}/allposts/${postId}/${userId}`, {
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

// getPosts
export const filterPosts = async (query) => {
  return await fetch(`${API}/search/filters`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(query),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// get reg post ids
export const getPostsIds = async (userId, token) => {
  return await fetch(`${API}/registerpost/list/${userId}`, {
    method: 'GET',
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

// list of registerpost by UserID /registerpost/list/:userId
export const registerpostListByUserId = (userId, token) => {
  return fetch(`${API}/registerpost/list/${userId}`, {
    method: 'GET',
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

// Get Single /registerpost/add/:userId
export const getSingleRegisterPost = (registerpostId, token) => {
  return fetch(`${API}/registerpost/${registerpostId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// CREATE /registerpost/add/:userId
export const registerSinglePost = (userId, token, post) => {
  return fetch(`${API}/registerpost/add/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// deleteProduct /registerpost/:registerpostId/:userId
export const deleteRegisterPost = (registerpostId, userId, token) => {
  return fetch(`${API}/registerpost/${registerpostId}/${userId}`, {
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