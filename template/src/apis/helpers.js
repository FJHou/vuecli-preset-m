import axios from './axios.config';

export function post(url) {
  return function(data) {
    return axios.post(url, data);
  };
}
