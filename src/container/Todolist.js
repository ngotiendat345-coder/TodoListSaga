import React, { useEffect, useState } from 'react';
import './Todolist.css';
import {GET_DATA,POST_TASKNAME,REJECT_TASKNAME,DELELTE_TASKNAME,DONE_TASKNAME} from '../redux/constants/actionType';
import {useSelector,useDispatch} from 'react-redux'
import Loading from '../component/Loading';

function TodoList(){
   console.log('todolist render');
    const {todoList} = useSelector(state=>state.TodoReducer);
   // state = {todoList:[],todoText:''}
    const [todoText,setTodoText] = useState('');
    const dispatch =useDispatch();
  
    useEffect(()=>{
        console.log('use effect fired');
       dispatch({type:GET_DATA});
    },[])
 
    return (
        <main>
            <Loading/>
            <div className="card">
                <div className="card__header">
                    <img src="./img/X2oObC4.png" />
                </div>
                {/* <h2>hello!</h2> */}
                <div className="card__body">
                    <div className="filter-btn">
                        <a id="one" href="#"><i className="fa fa-check-circle" /></a>
                        <a id="two" href="#" ><i className="fa fa-sort-alpha-down" /></a>
                        <a id="three" href="#" ><i className="fa fa-sort-alpha-up" /></a>
                        <a id="all" href="#"><i className="fa fa-clock" /></a>
                        <span className="toggle-btn">
                            <i className="fa fa-filter" />
                            <i className="fa fa-times" />
                        </span>
                    </div>
                    <div className="card__content">
                        <div className="card__title">
                            <h2>My Tasks</h2>
                            <p>September 9,2020</p>
                        </div>
                        <div className="card__add">
                            <input id="newTask" type="text" placeholder="Enter an activity..." 
                                value={todoText} onChange={(e)=>{
                                    setTodoText(e.target.value)
                                }}
                            />
                            <button id="addItem" onClick={()=>{
                                dispatch({type:POST_TASKNAME,payload:todoText})
                            }}>
                                <i className="fa fa-plus" />
                            </button>
                        </div>
                        <div className="card__todo">
                            {/* Uncompleted tasks */}
                            <ul className="todo" id="todo">
                                {todoList.map((item,index)=>{
                                   if(!item.status){
                                    return (
                                        <li key={index}>
                                            {item.taskName}
                                            <div>
                                                <a className="buttons" style={{ cursor: 'pointer' }}><i className="fa fa-trash" onClick={()=>{
                                                    dispatch({type:DELELTE_TASKNAME,payload:item.taskName})
                                                }}/></a>
                                                <a className="buttons" style={{ cursor: 'pointer' }}><i className="fa fa-check" onClick={()=>{
                                                   dispatch({type:DONE_TASKNAME,payload:item.taskName})
                                                }}/></a>
                                            </div>
                                        </li>
                                    )
                                   }
                                })}
                            </ul>
                            
                            {/* Completed tasks */}
                            <ul className="todo" id="completed">
                            {todoList.map((item,index)=>{
                                   if(item.status){
                                    return (
                                        <li key={index}>
                                            {item.taskName}
                                            <div>
                                                <a className="buttons" style={{ cursor: 'pointer' }}><i className="fa fa-trash" onClick={()=>{
                                                     dispatch({type:DELELTE_TASKNAME,payload:item.taskName})
                                                }}/></a>
                                                <a className="buttons" style={{ cursor: 'pointer' }}><i className="fa fa-redo" onClick={()=>{
                                                     dispatch({type:REJECT_TASKNAME,payload:item.taskName})
                                                }}/></a>
                                            </div>
                                        </li>
                                    )
                                   }
                                })}
        
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default TodoList;