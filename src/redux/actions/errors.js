import { GET_ERRORS, CLEAR_ERRORS } from './actionTypes';

// RETURN ERRORS
export const returnErrors = (message, status, id = null) => ({
  type: GET_ERRORS,
  payload: { message, status, id },
});

// CLEAR ERRORS
export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
