import AxiosClient from '../../config/axios';
import tokenAuth from '../../config/token';
import Swal from 'sweetalert2';
import { LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT, VALIDATE_SUCCESS, VALIDATE_ERROR } from '../types';

export function validateUserAction(){
    return async (dispatch) => {

        try {
            await AxiosClient.get('/auth');
            dispatch( validateSuccess() );
        } catch (error) {
            console.log(error)
            dispatch( validateError() )
        } 
    }

}
//FUNCTIONS
const validateSuccess = () => ({
    type: VALIDATE_SUCCESS
})
const validateError = () => ({
    type: VALIDATE_ERROR
})

export function authUserAcction(values){
    return async (dispatch) => {

        try {
            const response = await AxiosClient.post('/auth', values);
            dispatch( loginSuccess(response.data) );
            tokenAuth(response.data.token);
            Swal.fire(
                'Success!',
                'Log In Successfully',
                'success'
            )
        } catch (error) {
           //console.log(error.response.data.msg); 
            dispatch( loginError(error.response.data.msg) );
        }
    }
}

//FUNCTIONS
const loginSuccess = data =>({
    type: LOGIN_SUCCESS,
    payload: data
})

const loginError = msg => ({
    type: LOGIN_ERROR,
    payload: msg
})

//LOG OUT
export function logOutAcction(){
    return (dispatch) =>{
        dispatch( logOut() )
    }
}

//FUNCTIONS
const logOut = () => ({
    type: LOG_OUT
})