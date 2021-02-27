import React, {useContext, useState} from 'react';
import TodoItem from './TodoItem';
import AddTodoModal from './modals/AddTodoModal';
import {ModalContext} from '../contexts/ModalContext';
import {DataContext} from '../contexts/DataContext';
import {Droppable, Draggable} from 'react-beautiful-dnd';

const TaskContainer = (props) => {
    const {modals,dispatch} = useContext(ModalContext);
    const {items, itemDispatch} = useContext(DataContext);
    const [id, setId] = useState('');
    
    console.log(props.index)

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

    function handleRemoveTask(){
        var warning = window.confirm("You are going to delete a Task");
        if(warning === true){
            const colId = id;
        const project = document.getElementById('projects').value.toString();
        let  newColumn = Object.keys(items.columns)
        .filter(key => key !== colId)
        .reduce((result, current) => {
        result[current] = items.columns[current];
        return result;
        }, {});
        let newColumnOrder = items.columnOrder.filter(order => order !== colId);
        let newTasks = items.projects[project].tasks.filter(task => task !== colId);
        const itemCopy = items;
        const {todoIds} =itemCopy.columns[id];
          if(todoIds.length > 0){
           todoIds.forEach(id => {
               delete itemCopy.todos[id]
           });
         };
         delete itemCopy.columns[id]
        let newTodos = itemCopy.todos;
        itemDispatch({type:'REMOVE_TASK', newColumn, newColumnOrder, project, newTasks, newTodos});
        }
        else{
            return;
        }
    }

    function handlePressDown(){
        setId(props.columnname.id);
    }

    function handleEdit(){
        const colId = id;
        var rename = prompt("Rename Task:", props.columnname.name);
        if(rename === null){
            return;
        }else{
            itemDispatch({type:'CHANGE_COLUMN_NAME', rename, colId});
        } 
    }
    function getStyle(style, snapshot){
        return  snapshot ?  {
            ...style,
            background: `#165cb8`,
            transition: `background ease 0.5s`,
            borderRadius: `5px`
          } :  style;  
    }

    return ( 
        <Draggable key={props.columnname.id} draggableId={props.columnname.id} index={props.index} >
            {provided => (
        <div className="task-container" onMouseDown={() => handlePressDown()}
        {...provided.draggableProps}
        ref={provided.innerRef}>
            <div className="top">
            <div className="dragicon" {...provided.dragHandleProps}></div>
            <div>
            <p style={{display: "inline-block"}} >{props.columnname.name} </p>
            <i className='bx bx-edit bx-tada-hover' id="edit" onClick={() => handleEdit()}></i>
            </div>
            <i className='bx bx-add-to-queue bx-tada-hover' id="add" onClick={() => {handleChange(); dispatch({type: 'SHOW_MODAL', id:'addtodomodal'});}}></i>
            <i className='bx bx-trash bx-tada-hover' id="remove" value={props.columnname.id} onClick={ handleRemoveTask}></i>
             </div>
             <Droppable droppableId={props.columnname.id} type="task" direction="vertical">
                 {(provided, snapshot) => (
                     <div className="todo-container"
                     ref={provided.innerRef}
                     {...provided.droppableProps}
                     isDraggingOver={snapshot.isDraggingOver}
                     style={getStyle(provided.droppableProps.style, snapshot.isDraggingOver)}>
                    {props.task.map((task,index) => (
                        <TodoItem key={task.id} task={task} index={index} columnname={props.columnname}/>
                    ))}
                    {provided.placeholder}
                    </div>
                 )}
            </Droppable>
            <AddTodoModal isOpen={modals[3].display} onRequestClose={handleModal('addtodomodal')} passTodo={passTodo}/>
        </div>
         )}
        </Draggable>
     );
}
export default TaskContainer;