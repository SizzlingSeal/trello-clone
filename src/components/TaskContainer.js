import React, {useContext, useState} from 'react';
import TodoItem from './TodoItem';
import AddTodoModal from './modals/AddTodoModal';
import {ModalContext} from '../contexts/ModalContext';
import {DataContext} from '../contexts/DataContext';
import {Droppable} from 'react-beautiful-dnd';


const TaskContainer = (props) => {
    
    const {modals,dispatch} = useContext(ModalContext);
    const {items, itemDispatch} = useContext(DataContext);
    const [id, setId] = useState(props.columnname.id);

    function handleModal(modal){
        return  () => dispatch({type: 'SHOW_MODAL', id:modal})
    }
    function passTodo(event,name, desc){
        const columnId = items.selectedTask;
        handleAddTodo(event,name, desc, columnId);
    }
    function handleChange(){
        const ids = id;
        itemDispatch({type: 'CHANGE_SELECTED_TASK', ids})
    }
    function handleAddTodo(event,name,desc, columnname){
        itemDispatch({type: 'ADD_TODO', name, desc, columnname });
        dispatch({type: 'SHOW_MODAL', id:'addtodomodal'});
        event.preventDefault();
    }

    return ( 
        <div className="task-container">
            <div className="top">
            <div className="dragicon"></div>
            <div>
            <p style={{display: "inline-block"}} >{props.columnname.name} </p>
            <i className='bx bx-edit bx-tada-hover' id="edit" ></i>
            </div>
            <i className='bx bx-add-to-queue bx-tada-hover' id="add" onClick={() => {handleChange(); dispatch({type: 'SHOW_MODAL', id:'addtodomodal'});}}></i>
             </div>
             <Droppable droppableId={props.columnname.id}>
                 {(provided, snapshot) => (
                     <div className="todo-container"
                     ref={provided.innerRef}
                     {...provided.droppableProps}
                     isDraggingOver={snapshot.isDraggingOver}
                     >

                    {props.task.map((task,index) => (
                        <TodoItem key={task.id} task={task} index={index} columnname={props.columnname}/>
                    ))}
                    {provided.placeholder}
                    </div>
                 )}
            </Droppable>
            <AddTodoModal isOpen={modals[3].display} onRequestClose={handleModal('addtodomodal')} passTodo={passTodo}/>
        </div>
     );
}
 
export default TaskContainer;