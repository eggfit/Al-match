import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import * as types from '../actions/actionTypes';

const BASE_URL = 'http://localhost:3001';

export const loginRequest = ({ username, userId, email, password }) => ({
  type: types.LOGIN_REQUEST,
  payload: { username, userId, email, password },
});

export const loginSuccess = (userData) => ({
  type: types.LOGIN_SUCCESS,
  payload: userData,
});

export const loginFailure = (error) => ({
  type: types.LOGIN_FAILURE,
  payload: error,
});

export const registerRequest = ({ username, email, password }) => ({
  type: types.REGISTER_REQUEST,
  payload: { username, email, password },
});

export const registerSuccess = () => ({
  type: types.REGISTER_SUCCESS,
});

export const registerFailure = (error) => ({
  type: types.REGISTER_FAILURE,
  payload: error,
});


// API call functions
const getLoginAPI = async ({ username, userId, email, password }) => {
    try {
        const res = await axios.post(`${BASE_URL}/auth/login`, {
          username,
          userId,
          email,
          password,
        });
        return res.data;
      } catch (error) {
        throw error;
      }
};

const getRegisterAPI = async ({ username, userId, email, password }) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      username,
      userId,
      email,
      password,
    });
    return res.data;
  } catch (error) {
    throw error;
  }
};

// Saga worker functions
function* loginSaga(action) {
  try {
    const userData = yield call(getLoginAPI, action.payload);
    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

function* registerSaga(action) {
  try {
    yield call(getRegisterAPI, action.payload);
    yield put(registerSuccess());
  } catch (error) {
    yield put(registerFailure(error));
  }
}

// Saga watcher function
function* watchLoginSaga() {
  yield takeLatest(types.LOGIN_REQUEST, loginSaga);
}

function* watchRegisterSaga() {
  yield takeLatest(types.REGISTER_REQUEST, registerSaga);
}

export default function* authSaga() {
  yield watchLoginSaga();
  yield watchRegisterSaga();
}