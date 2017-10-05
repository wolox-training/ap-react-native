import axios from 'axios';

var Axios = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 10000
});

export default Axios;
