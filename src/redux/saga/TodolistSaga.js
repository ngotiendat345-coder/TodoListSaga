import { takeLatest, call, put, delay } from "redux-saga/effects";
import {GET_DATA,POST_TASKNAME,REJECT_TASKNAME,DELELTE_TASKNAME,DONE_TASKNAME,GET_DATA_SUCCESS,GET_DATA_FALURE} from '../constants/actionType';

import {todolistService} from '../../services/TodolistService'

// viết chức năng cho action getData
export function* watcherGetDataSaga() {
    console.log('getdata saga fired');
    yield takeLatest(GET_DATA, workerGetDataSaga);
}

function* workerGetDataSaga(){
       try{
           const response = yield call(todolistService.fetchData);
           console.log(response);
           yield delay(500);
           const payload = response.data;
           yield put({ type: GET_DATA_SUCCESS, payload });
       }
       catch (err) {
           yield put({ type: GET_DATA_FALURE, payload: err });
       }
}

// viết chứ năng cho action post taskname

export function* watcherPostDataSaga(){
    yield takeLatest(POST_TASKNAME,workerPostDataSaga);
}



function* workerPostDataSaga(action){
    
        try{
            const response = yield call(()=>{
                return todolistService.addTaskName(action.payload);
            })
            console.log(response);
            if(response.status===200){
                yield put({type:GET_DATA});
            }
        }catch(err){
            console.log(err);
        }
    
}
// viết chức năng cho action done taskname

export function* watcherDoneDataSaga(){
    yield takeLatest(DONE_TASKNAME,workerDoneDataSaga);
}

function* workerDoneDataSaga(action){
    try{
        const response = yield call(()=>{
            return todolistService.doneTaskName(action.payload);
        })
        if(response.status===200){
            yield put({type:GET_DATA});
        }
    }
    catch(err){
        console.log(err);
    }
}
// viết chức năng cho action delete taskname

export function* watcherDeleteDataSaga(){
    yield takeLatest(DELELTE_TASKNAME,workerDeleteTaskName);
}
function* workerDeleteTaskName(action){
    try{
        const response = yield call(()=>{
            return todolistService.deleteTaskName(action.payload)
        })
        if(response.status===200){
            yield put({type:GET_DATA})
        }
    }
    catch(err){
        console.log(err);
    }
}

//viết chức năng cho action reject taskname;
export function* watcherRejectDataSaga(){
    yield takeLatest(REJECT_TASKNAME,workerRejectTaskName);
}
function* workerRejectTaskName(action){
    try{
        const response = yield call(()=>{
            return todolistService.rejectTaskName(action.payload)
        })
        if(response.status===200){
            yield put({type:GET_DATA})
        }
    }
    catch(err){
        console.log(err);
    }
}