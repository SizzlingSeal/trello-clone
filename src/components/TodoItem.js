import React from 'react';

const TodoItem = (props) => {
    return ( 
        <div className="todo-item">
            <div className="dragicon"><i className='bx bx-grid-small bx-tada-hover' id="addtask" ></i></div>
            <div>
            <h4>{props.todoName}</h4>
            </div>
            <div>
            <i className='bx bx-task bx-tada-hover' id="addtask" ></i>
            <i className='bx bx-task-x bx-tada-hover' id="addtask" ></i>
            </div>
        </div>
     );
}
 
export default TodoItem;