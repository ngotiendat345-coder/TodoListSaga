import React from 'react';
import TodoList from './container/Todolist';

function App(){
    console.log('app render');
    return (
        <>
            <TodoList/>
        </>
    )
}

export default App;