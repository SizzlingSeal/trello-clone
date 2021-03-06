
import React, {useContext, useState} from 'react';
import {DataContext} from '../contexts/DataContext';
import {Draggable} from 'react-beautiful-dnd';
import swal from 'sweetalert';


const TodoItem = (props) => {
    const {items, itemDispatch} = useContext(DataContext);
    const [id, setId] = useState(props.columnname.id);

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
    
    function getStyle(style, snapshot){
        return  snapshot ?  {
            ...style,
            background: `#1877f2`,
          } :  style;
          
    }
    function handleDesc(){
        swal(props.task.name, props.task.desc, "info");
    }


    return ( 
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
                <div className="todo-item"
                {...provided.draggableProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
                style={getStyle(provided.draggableProps.style, snapshot.isDragging)}
                >
                <i className='bx bx-grid-vertical' id="dragicon" title="Drag" {...provided.dragHandleProps}></i>
                <div>
                <h4  className={props.columnname.id} onClick={() => handleDesc()}>{props.task.name}</h4>
                </div>
                <div>

                <i className='bx bx-task-x bx-tada-hover' id="deletetask" title="Remove Task" onClick={() => handleRemove(props.task.id)}></i>
                </div>
                </div>
            )}

        </Draggable>
     );
}
export default TodoItem;