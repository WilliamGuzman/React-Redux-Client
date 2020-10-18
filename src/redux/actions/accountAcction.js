import Swal from "sweetalert2";
import AxiosClient from "../../config/axios";
import tokenAuth from '../../config/token';
import { CREATE_ACCOUNT_SUCCESS, CREATE_ACCOUNT_ERROR } from "../types";
//Create Account
export function accountAction(values){
    
    return async (dispatch) => {
        
        try {
            
            const response = await AxiosClient.post('/user', values);
            //console.log(respuesta)
            dispatch( createAccountSuccess(response.data) )
            tokenAuth(response.data.token);
            Swal.fire(
                'Success!',
                'Account Created Successfully',
                'success'
            )
            
        } catch (error) {
            //console.log(error.response.data.msg)
            dispatch( createAccountError(error.response.data.msg) );
        }
    }
}

//FUNCTIONS
const createAccountSuccess = response =>({
    type: CREATE_ACCOUNT_SUCCESS,
    payload: response
})
const createAccountError = msg =>({
    type: CREATE_ACCOUNT_ERROR,
    payload: msg
})