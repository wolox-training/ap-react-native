import axios from '../config/api.js'

function Authenticate(props) {
  return axios.post('users/sessions', {
    email: props.email,
    password: props.password
  })
  .then((response) => {
    axios.defaults.headers.common['Authorization'] = response.access_token;
    localStorage.setItem('access_token', response.access_token);
  })
}

export default Authenticate
