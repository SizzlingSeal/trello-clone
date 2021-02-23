
import React, {useContext, useState} from 'react';
import {DataContext} from '../contexts/DataContext';
import {Draggable} from 'react-beautiful-dnd';


const TodoItem = (props) => {
    const {items, itemDispatch} = useContext(DataContext);
    const [id, setId] = useState(props.columnname.id);

   console.log(props.task.id)
    function handleRemove(todoId){
    let  newTodos = Object.keys(items.todos)
    .filter(key => key !== todoId)
    .reduce((result, current) => {
    result[current] = items.todos[current];
    return result;
    }, {});
    let columnid = id;
    let newColumn = items.columns[columnid].todoIds.filter(item => item !== todoId);
    console.log(newColumn);
    itemDispatch({type:'REMOVE_TODO', newTodos, columnid, newColumn})

    }
    return ( 
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className="todo-item"
                {...provided.draggableProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                >
                <i className='bx bx-grid-vertical' id="dragicon" title="Drag" {...provided.dragHandleProps}></i>
                <div>
                <h4>{props.task.name}</h4>
                </div>
                <div>
                <i className='bx bx-task bx-tada-hover' id="checktask" title="Complete Task"></i>
                <i className='bx bx-task-x bx-tada-hover' id="deletetask" title="Remove Task" onClick={() => handleRemove(props.task.id)}></i>
                </div>
                </div>
            )}
        
        </Draggable>
     );
}
 
export default TodoItem;