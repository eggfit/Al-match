import { createAction, handleActions } from 'redux-actions';
// produce import
import produce from 'immer';
// takeLatest import
import { takeLatest } from 'redux-saga/effects';
// saga import
import createRequestSaga,{ createRequestActionTypes } from '../lib/createRequestSaga';
// api import
import * as authAPI from '../lib/api/auth';
import AuthReducer from '../reducers/auth';

// // sample 액션 타입 정의
// // module/ACTION_TYPE. 액션 타입은 대문자로, 앞에 모듈을 붙여주어야 액션 이름 중첩을 방지할 수 있음.
import {
  CHANGE_FIELD,
  INITIALIZE_FORM,
} from '../constants/actionTypes';

const [ REGISTER ] = createRequestActionTypes(
  'auth/REGISTER',
);

const [ LOGIN ] = createRequestActionTypes(
  'auth/LOGIN',
);

// const CHANGE_FIELD = 'auth/CHANGE_FIELD';
// const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';



// createAction 함수는 매번 객체를 직접 만들어 줄 필요 없이 간단하게 액션 생성 함수 선언이 가능. 
// 액션 추가 데이터는 payload 사용

export const changeField = createAction(
    // 추가 데이터 생성은 payload
    CHANGE_FIELD,
    ({form,key,value}) =>({
        form, // register, login
        key, // username , password, passwordConfirm
        value // 실제로 바꾸려는 값
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form); //register , login


// register/login
export const register = createAction(REGISTER, ( {username, userId, password })=> ({
  username,
  userId,
  password,
}));

export const login = createAction(LOGIN, ( { username, userId, password}) => ({
  username,
  userId,
  password,
}));


// saga 
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN,authAPI.login);

export function* authSaga(){
  // takeLatest는 기존에 진행 중이던 작업이 있다면 취소 하고 가장 마지막으로 실행된 작업만 수행.
  yield takeLatest(REGISTER, registerSaga);
  yield takeLatest(LOGIN,loginSaga);
}

<AuthReducer />