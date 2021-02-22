import {GET_DATA,GET_DATA_SUCCESS,GET_DATA_FALURE} from '../constants/actionType';

const initState={todoList:[],fetching:true,error:false};

const TodoReducer=(state=initState,action)=>{
    console.log('reducer fired');
    switch(action.type){
        case GET_DATA:
            console.log(state);
            return {...state,fetching:true};
        case GET_DATA_SUCCESS:
            console.log(state);
            state.todoList=action.payload;
            return {...state,fetching:false};
        case GET_DATA_FALURE:
            console.log(state);
            return {...state,error:action.payload}
        default:return state;

    }
}
export default TodoReducer;