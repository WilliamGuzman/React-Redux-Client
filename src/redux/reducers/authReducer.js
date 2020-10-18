import {
  CREATE_ACCOUNT_SUCCESS,
  CREATE_ACCOUNT_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOG_OUT,
  VALIDATE_SUCCESS,
  VALIDATE_ERROR
} from "../types";
const initialState = {
  error: false,
  msg: '',
  authenticated: false,
  loading: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case CREATE_ACCOUNT_SUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authenticated: true,
        error: false,
        loading: false
      };
    }
    case LOGIN_ERROR:
    case CREATE_ACCOUNT_ERROR: {
      localStorage.removeItem('token');
      return {
        ...state,
        msg: action.payload,
        error: true,
        authenticated: false
      };
    }
    case VALIDATE_ERROR:
    case LOG_OUT:
    {
      localStorage.removeItem('token');
      return{
        ...state,
        authenticated: false,
        loading: false
      }
    }

    case VALIDATE_SUCCESS: {
      return{
        ...state,
        authenticated: true,
        loading: false
      }
    }

    default:
      return state;
  }
}
