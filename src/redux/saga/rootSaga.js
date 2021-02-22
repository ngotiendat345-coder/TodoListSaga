import {all} from "redux-saga/effects";
import * as TodoListSaga from './TodolistSaga';
export function* rootSaga(){
    console.log('root saga');
    yield all([
        TodoListSaga.watcherGetDataSaga(),
        TodoListSaga.watcherPostDataSaga(),
        TodoListSaga.watcherRejectDataSaga(),
        TodoListSaga.watcherDoneDataSaga(),
        TodoListSaga.watcherDeleteDataSaga()
    ]);
}