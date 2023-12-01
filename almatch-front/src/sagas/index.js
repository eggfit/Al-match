//rootSaga 생성
import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import authSaga from "./auth_tmp";
import * as auth from '../actions/index';

// loading add
const rootReducer = combineReducers({
    auth
});

export function* rootSaga(){
    yield all([authSaga()]);
}
export default rootReducer;