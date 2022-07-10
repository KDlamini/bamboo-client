import { GET_ERRORS, CLEAR_ERRORS } from '../../actions/actionTypes';

const initialState = {
  message: {},
  status: null,
  id: null,
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS:
      return action.payload;
    case CLEAR_ERRORS:
      return {
        message: {},
        status: null,
        id: null,
      };
    default:
      return state;
  }
};

export default errorsReducer;
