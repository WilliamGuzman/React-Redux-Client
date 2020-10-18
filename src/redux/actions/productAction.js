import AxiosClient from '../../config/axios';
import Swal from 'sweetalert2';
import { 
        GET_PRODUCTS, 
        GET_PRODUCTS_SUCCESS, 
        GET_PRODUCTS_ERROR,
        CREATE_PRODUCTS,
        CREATE_PRODUCT_SUCCESS,
        UPDATE_PRODUCT,
        UPDATE_PRODUCT_SUCCESS,
        DELETE_PRODUCT,
        CHANGE_OPTION
    } from '../types';

//GET ALL PRODUCTS
export function getProductAcction(){
    return async (dispatch) => {

        dispatch( getProducts () )

        try {
            
            const products = await AxiosClient.get('/products');
            dispatch( getProductSuccess(products.data) );
        } catch (error) {
            console.log(error)
            dispatch( getProductError() );
        }
    }
}

//FUNCTIONS
const getProducts = () => ({
    type: GET_PRODUCTS
})

const getProductSuccess = products => ({
    type: GET_PRODUCTS_SUCCESS,
    payload: products
}) 

const getProductError = () => ({
    type: GET_PRODUCTS_ERROR,
}) 

//CREATE PRODUCT
export function createProductAction (values) {
    return async (dispatch) => {

        dispatch( createProduct() )

        try {
            
            const response = await AxiosClient.post('/products', values);
            dispatch( createProductSucces(response.data) )
            Swal.fire(
                'Success',
                'Product Created Successfully',
                'success'
            )

        } catch (error) {
            console.log(error);
        }

    }
}

//FUNCTIONS
const createProduct = () => ({
    type: CREATE_PRODUCTS
})

const createProductSucces = product => ({
    type: CREATE_PRODUCT_SUCCESS,
    payload: product
})

//UPDATE PRODUCT
export function selectProductAcction(product) {
    return  (dispatch) => {
        dispatch( selectProductUpdate(product) );
    }
}

export function updateProductAction(product){
    return async (dispatch) => {

        try {
            
            await AxiosClient.put(`/products/${product._id}`, product);
            dispatch( updateProductSuccess(product) )
            Swal.fire(
                'Success!',
                'Product updated successfully!',
                'success'
            )
        } catch (error) {
            console.log(error);
        }
    }
}

//FUNCTIONS
const selectProductUpdate = product => ({
    type: UPDATE_PRODUCT,
    payload: product
})

const updateProductSuccess = product => ({
    type: UPDATE_PRODUCT_SUCCESS,
    payload: product
})

//DELETE PRODUCT
export function deleteProductAction(productId){
    return  async (dispatch) => {

        try {

            await AxiosClient.delete(`/products/${productId}`);
            dispatch( deleteProduct(productId) );
            Swal.fire(
                'Success!',
                'Product deleted successfully!',
                'success'
            )
        } catch (error) {
            console.log(error)
        }

    }
}

//FUNCTIONS
const deleteProduct = productId => ({
    type: DELETE_PRODUCT,
    payload: productId
})

//CHANGE OPTION PRODUCT
export function changeOptionAction(){
    return (dispatch) =>{
        dispatch( changeOption() )
    }
} 

//FUNCTION
const changeOption = () =>({
    type: CHANGE_OPTION
})