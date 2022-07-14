import {
  USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL,
  LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_MODAL, REGISTER_MODAL,
  ADD_ADDRESS, MODIFY_ADDRESS, DELETE_ADDRESS, GET_USER_GEOLOCATION,
} from '../../actions/actionTypes';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  isLoading: false,
  user: {},
  isLoginToggle: false,
  isRegisterToggle: false,
  response: {},
  location: JSON.parse(localStorage.getItem('geo')) || {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        isLoginToggle: false,
        isRegisterToggle: false,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case LOGIN_MODAL:
      return {
        ...state,
        isRegisterToggle: false,
        isLoginToggle: !state.isLoginToggle,
      };
    case REGISTER_MODAL:
      return {
        ...state,
        isLoginToggle: false,
        isRegisterToggle: !state.isRegisterToggle,
      };
    case ADD_ADDRESS:
    case MODIFY_ADDRESS:
    case DELETE_ADDRESS:
      return {
        ...state,
        response: action.payload,
      };
    case GET_USER_GEOLOCATION:
      localStorage.setItem('geo', JSON.stringify(action.payload));
      return {
        ...state,
        location: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
