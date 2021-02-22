import {SHOW_LOADING,HIDE_LOADING} from '../constants/loadingType';

const initState=false;

const LoadingReducer =(state=initState,action)=>{
    switch(action.type){
        case SHOW_LOADING:
            return state=true;
        case HIDE_LOADING:
            return state=false;
        default:return state;
    }
}

export default LoadingReducer;