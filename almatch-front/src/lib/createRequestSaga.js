import { call, put } from 'redux-saga/effects';
import { startLoading,finishLoading } from '../modules/loading';

// 타입 정의
export const createRequestActionType = type =>{
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return [type,SUCCESS,FAILURE]
};

 // 파라미터로 action을 받아오면 조회 가능
export default function createRequestSaga(type, request){
    const SUCCESS = `${type}_SUCCESS`
    const FAILURE = `${type}_FAILURE`
    //saga에서 SUCCESS가 실행되면, SUCCESS타입을 리슨하고 있는 reducer가 반응함. 
    // 액션이 발동하면 reducer가 실행된다.
    return function*(action){
        yield put(startLoading(type)); 
        try{
            // call 사용시 Promise를 반환하는 함수를 호출, 기다릴 수 있음.
            // 첫번째 파라미터에는 함수, 나머지 파라미터는 해당 함수에 넣을 인수.
            const response = yield call(request, action.payload);
            // put은 액션을 디스패치
            yield put({
                type:SUCCESS,
                payload:response.data,
            });
        }catch(e){
            yield put({
                type:FAILURE,
                payload:e,
                error:true,
            });
        }
        yield put(finishLoading(type));
    }
};