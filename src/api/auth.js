import { API } from '../config';
import { toast } from 'react-toastify';

// SIGN UP
export const signup = (user) => {
  return fetch(`${API}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// LOG IN
export const signin = (user) => {
  return fetch(`${API}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

//TOKEN
export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('jwt', JSON.stringify(data));
    next();
  }
};

//signout
export const signout = (next) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('jwt');
    next();
    return fetch(`${API}/signout`, {
      method: 'GET',
    })
      .then((response) => {
        toast.info('sign off !!!');
      })
      .catch((err) => console.log(err));
  }
};

//Authenticated boolean
export const isAuthenticated = () => {
  if (typeof window == 'undefined') {
    return false;
  }
  if (localStorage.getItem('jwt')) {
    return JSON.parse(localStorage.getItem('jwt'));
  } else {
    return false;
  }
};

export const read = (userId, token) => {
  return fetch(`${API}/user/${userId}`, {
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

export const update = (userId, token, user) => {
  return fetch(`${API}/user/${userId}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const updateUser = (user, next) => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('jwt')) {
      let auth = JSON.parse(localStorage.getItem('jwt'));
      auth.user = user;
      localStorage.setItem('jwt', JSON.stringify(auth));
      next();
    }
  }
};

// Forgot Password
export const forgotPassword = (data) => {
  // console.log(data);
  return fetch(`${API}/forget/Password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

// Reset Password
export const resetPassword = (data) => {
  return fetch(`${API}/reset/Password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};