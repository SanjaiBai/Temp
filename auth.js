// src/utils/auth.js
export const login = (username, password) => {
  return username === 'admin' && password === '1234';
};

export const isAuthenticated = () => {
  return localStorage.getItem('loggedIn') === 'true';
};

export const logout = () => {
  localStorage.removeItem('loggedIn');
};
