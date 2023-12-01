import * as ActionTypes from './actionTypes';

export const loginRequest = ({ username, userId, email, password }) => ({
    type: ActionTypes.LOGIN_REQUEST,
    payload: { username, userId, email, password },
  });
  
  export const loginSuccess = (userData) => ({
    type: ActionTypes.LOGIN_SUCCESS,
    payload: userData,
  });
  
  export const loginFailure = (error) => ({
    type: ActionTypes.LOGIN_FAILURE,
    payload: error,
  });
  
  export const registerRequest = ({ username, email, password }) => ({
    type: ActionTypes.REGISTER_REQUEST,
    payload: { username, email, password },
  });
  
  export const registerSuccess = () => ({
    type: ActionTypes.REGISTER_SUCCESS,
  });
  
  export const registerFailure = (error) => ({
    type: ActionTypes.REGISTER_FAILURE,
    payload: error,
  });
