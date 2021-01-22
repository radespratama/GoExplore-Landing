import axios from 'axios'
import errorRespondHandler from './errorRespondHandler'

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_HOST}/api/v1/member`,
});

instance.interceptors.response.use(
    (response) => response,
    errorRespondHandler
);

export default instance;