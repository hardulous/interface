import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://interface20.firebaseio.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
export default instance;
