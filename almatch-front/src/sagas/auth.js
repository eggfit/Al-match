// import { createAction, handleActions } from 'redux-actions';
// import  { produce } from 'immer';
// import { takeLatest, call, put } from 'redux-saga/effects';
// import createRequestSaga,{ createRequestActionTypes } from '../lib/createRequestSaga';
// import axios from 'axios';

// import {
//   CHANGE_FIELD,
//   INITIALIZE_FORM,
//   REGISTER_SUCCESS, REGISTER_FAILURE,
//   LOGIN_SUCCESS, LOGIN_FAILURE
// } from '../constants/actionTypes';

// const BASE_URL = 'http://localhost:3001';

// const [ REGISTER ] = createRequestActionTypes(
//   'auth/REGISTER',
// );

// const [ LOGIN ] = createRequestActionTypes(
//   'auth/LOGIN',
// );

// // const CHANGE_FIELD = 'auth/CHANGE_FIELD';
// // const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';



// // createAction 함수는 매번 객체를 직접 만들어 줄 필요 없이 간단하게 액션 생성 함수 선언이 가능. 
// // 액션 추가 데이터는 payload 사용

// export const changeField = createAction(
//     // 추가 데이터 생성은 payload
//     CHANGE_FIELD,
//     ({form,key,value}) =>({
//         form, // register, login
//         key, // username , password
//         value // 실제로 바꾸려는 value
//     })
// );

// export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register , login


// // register/login
// export const register = createAction(REGISTER, ( {username, userId, password })=> ({
//   username,
//   userId,
//   password,
// }));

// export const login = createAction(LOGIN, ( { username, userId, password}) => ({
//   username,
//   userId,
//   password,
// }));


// // saga 
// const registerSaga = createRequestSaga(REGISTER, authAPI.register);
// const loginSaga = createRequestSaga(LOGIN, authAPI.login);

// export function* authSaga(){
//   // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 하고 가장 마지막으로 실행된 작업만 수행.
//   yield takeLatest(REGISTER, registerSaga);
//   yield takeLatest(LOGIN,loginSaga);
// }

// const initialState = {
//   register: {
//     username: '',
//     password: '',
//   },
//   login: {
//     username: '',
//     password: ''
//   },
//   auth:null,
//   authError:null,
// };

// const auth = handleActions(
//   {
//       [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
//         produce(state, draft => {
//           draft[form][key] = value;
//         }),
//       [INITIALIZE_FORM]: (state, { payload: form }) => ({
//         ...state,
//         [form]: initialState[form],
//         authError:null, 
        
//       }),
  
//       [REGISTER_SUCCESS] : ( state, { payload : auth }) => ({
//         ...state,
//         authError:null,
//         auth,
//       }),
//       [REGISTER_FAILURE] : ( state, { payload : error }) => ({
//         ...state,
//         authError:error,
//         }),
  
//       [LOGIN_SUCCESS] : ( state, { payload : auth }) => ({
//         ...state,
//         authError:null,
//         auth,
//       }),
//       [LOGIN_FAILURE] : ( state, { payload : error }) => ({
//         ...state,
//         authError:error,
//         }),
//     },
//     initialState,
//   );

//   export default auth;