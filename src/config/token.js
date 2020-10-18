import AxiosClient from './axios';

const tokenAuth = token => {
    if (token) {
        //Pasamos al Header el token
        AxiosClient.defaults.headers.common['Authorization'] = token;
    }else {
        //Si se cerro sesion o expori el token see elimina
        delete AxiosClient.defaults.headers.common['Authorization'];
    }
}

export default tokenAuth;