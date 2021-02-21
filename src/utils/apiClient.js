import axios from 'axios';
import { authHeader } from '../services/auth-header';
import store from '../redux/configureStore';
import { EMAIL, PASSWORD } from '../configs/api';
import { login } from '../redux/actions/auth';

const instance = axios.create();

instance.interceptors.response.use((response) => {
  return response
}, async function (error) {
  if (error.response.status === 401) {
    await store.dispatch(login(EMAIL, PASSWORD));

    const _response = instance({
      ...error.config,
      headers: authHeader()
    });
    return _response;
  }

  return Promise.reject(error)
},
);

export default instance;