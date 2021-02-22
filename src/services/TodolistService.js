import React from 'react';
import axios from "axios";
import {DOMAIN} from '../util/constants/settingSystem';

class TodolistService{
    fetchData(){
        return axios({url:`${DOMAIN}/ToDoList/GetAllTask`,method:'GET'});
    }
    addTaskName(taskName){
        return axios({url:`${DOMAIN}/ToDoList/AddTask`,method:'POST',data:{taskName:taskName,status:false}});
    }
    doneTaskName(taskName){
        return axios({url:`${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`,method:'PUT'});
    }
    rejectTaskName(taskName){
        return axios({url:`${DOMAIN}/ToDoList/rejectTask?taskName=${taskName}`,method:'PUT'});
    }
    deleteTaskName(taskName){
        return axios({url:`${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`,method:'DELETE'});
    }
}

export const todolistService = new TodolistService();