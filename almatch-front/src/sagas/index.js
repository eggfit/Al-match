//rootSaga 생성

import { combineReducers } from "redux";
import { all } from 'redux-saga/effects'
import auth, { authSaga } from "./auth";
// loading import
import loading from "./loading";

// loading add
const rootReducer = combineReducers({
    auth,
    loading ,
});

export function* rootSaga(){
    yield all([authSaga()]);
}
export default rootReducer;