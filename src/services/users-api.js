import axios from 'axios';

const BASE_URL = 'https://5fca3e863c1c220016441fcc.mockapi.io/api/v1/users';

export const fetchUsers = () => axios.get(BASE_URL);
export const fetchUserPostsById = id => axios.get(`${BASE_URL}/${id}/posts`);
