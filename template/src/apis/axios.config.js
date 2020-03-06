import axios from 'axios';
import querystring from 'querystring';

import { API_URL, API_TIMEOUT } from '@/config';
import { getToken } from '@/utils';

// axios 实例
const AXIOS = axios.create({
  baseURL: API_URL,
  timeout: API_TIMEOUT,
  transformRequest: [
    function(data) {
      return querystring.stringify(data);
    }
  ]
});

AXIOS.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

AXIOS.interceptors.request.use(
  config => {
    config.headers['token'] = getToken();
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

AXIOS.interceptors.response.use(
  response => {
    return response.status === 200
      ? Promise.resolve(response)
      : Promise.reject(response);
  },
  error => {
    const { response } = error;

    if (response) {
      errHandler(response);
      return Promise.reject(error);
    } else {
      // 断网情况
      return Promise.reject(error);
    }
  }
);

// 错误处理
function errHandler(response) {
  const { status, message } = response;

  switch (status) {
    case 401:
      break;
    case 403:
      break;
    case 404:
      break;
    case 406:
      break;
    case 500:
      break;
    default:
      return message;
  }
}

export default AXIOS;
