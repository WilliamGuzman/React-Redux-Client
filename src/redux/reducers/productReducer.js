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

const initialState = {
    products:[],
    product: '',
    error: null,
    loading: false,
    option: true
}

export default function( state = initialState, action){
    switch (action.type) {

        case GET_PRODUCTS:
        case GET_PRODUCTS_ERROR:
        case CREATE_PRODUCTS:
        {
            return{
                ...state,
                loading: true
            }
        }

        case GET_PRODUCTS_SUCCESS: {
            return{
                ...state,
                products: action.payload,
                loading: false
            }
        }

        case CREATE_PRODUCT_SUCCESS:{
            return{
                ...state,
                products: [action.payload, ...state.products],
                loading: false
            }
        }
        
        case UPDATE_PRODUCT:{
            return{
                ...state,
                product: action.payload,
                option: false
            }
        }

        case UPDATE_PRODUCT_SUCCESS:
            return{
                ...state,
                product: null,
                products: state.products.map( product => product._id === action.payload._id ? product = action.payload : product),
                option: true
            }
        
        case DELETE_PRODUCT: {
            return{
                ...state,
                products: state.products.filter( product => product._id !== action.payload )
            }
        }

        case CHANGE_OPTION:{
            return{
                ...state,
                option: true,
                product: null
            }
        }

        default:
            return state;
    }
}