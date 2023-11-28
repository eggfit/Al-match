import { handleActions } from 'redux-actions';
// produce import
import produce from 'immer';
// takeLatest import
// saga import
// import { createRequestActionTypes } from '../lib/createRequestSaga';

import {
    CHANGE_FIELD,
    INITIALIZE_FORM,
    REGISTER_SUCCESS, REGISTER_FAILURE,
    LOGIN_SUCCESS, LOGIN_FAILURE
} from '../constants/actionTypes';

// const CHANGE_FIELD = 'auth/CHANGE_FIELD';
// const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
// const [ REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE ] =createRequestActionTypes(
//     'auth/REGISTER',
//   );
  
//   const [ LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE ] = createRequestActionTypes(
//     'auth/LOGIN',
//   );

const initialState = {
    register: {
      username: '',
      password: '',
      passwordConfirm: ''
    },
    login: {
      username: '',
      password: ''
    },
    auth:null,
    authError:null,
};

const auth = handleActions(

    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
          // 불변성 유지를 위한 immer 
          produce(state, draft => {
            draft[form][key] = value; // 예: state.register.username을 바꾼다
          }),
        [INITIALIZE_FORM]: (state, { payload: form }) => ({
          ...state,
          [form]: initialState[form],
          authError:null, // 폼 전환 시 회원 인증 에러 초기화
          
        }),
    
        [REGISTER_SUCCESS] : ( state, { payload : auth }) => ({
          ...state,
          authError:null,
          auth,
        }),
        [REGISTER_FAILURE] : ( state, { payload : error }) => ({
          ...state,
          authError:error,
          }),
    
        [LOGIN_SUCCESS] : ( state, { payload : auth }) => ({
          ...state,
          authError:null,
          auth,
        }),
        [LOGIN_FAILURE] : ( state, { payload : error }) => ({
          ...state,
          authError:error,
          }),
      },
      initialState,
    );
    
    
export default auth;