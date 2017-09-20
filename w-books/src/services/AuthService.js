import axios from '../config/api.js'

function Authenticate(props) {
  var sessionStorage = window['localStorage']

  return axios.post('users/sessions', {
    "email": props.email,
    "password": props.password
  })
  .then(function (response) {
    axios.defaults.headers.common['Authorization'] = response.access_token;
    localStorage.setItem('bgcolor', response.access_token);
  })
}

export default Authenticate
