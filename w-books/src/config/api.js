import axios from 'axios';

var Axios = axios.create({
  baseURL: 'https://wbooks-api-stage.herokuapp.com/api/v1/',
  timeout: 10000
});

export default Axios;
