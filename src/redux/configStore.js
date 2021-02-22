import {combineReducers} from 'redux'
import {applyMiddleware, createStore} from 'redux'
import TodoReducer from './reducer/TodoReducer';
import createSagaMiddleware from "redux-saga";
import {rootSaga} from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const rootReducer = combineReducers({
    TodoReducer,
});
export const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);