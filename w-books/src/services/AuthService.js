import axios from '../config/api.js'

function Authenticate(props) {
  return axios.post('users/sessions', {
    email: props.email,
    password: props.password
  })
  .then((response) => {
    axios.defaults.headers.common['Authorization'] = response.data.access_token;
    localStorage.setItem('access_token', response.data.access_token);
  })
}

export function isAuthenticated() {
  return localStorage.getItem('access_token') !== null;
}

export function logOut() {
  localStorage.removeItem('access_token');
}

export default Authenticate
