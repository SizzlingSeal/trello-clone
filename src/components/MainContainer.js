import React, {useContext, useState} from 'react';
import {DataContext} from '../contexts/DataContext';
import TaskContainer from './TaskContainer';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import swal from 'sweetalert';

const MainContainer = () => {
    const {items, itemDispatch} = useContext(DataContext);
    const [name, setName] = useState('');

    function handleAddTask(name, project){
        if(name.length === 0 ){
            swal("Enter Task Name!", "Missing Input" , "error" );
        }else{
        setName('');
        itemDispatch({type:'ADD_TASK', name, project});
    }
    }
    
    function handleChange(event){
        setName(event.target.value);
    }

    const onDragEnd = result => {
        const{destination, source, draggableId, type} = result;

        if(!destination){
            return;
        }
        if(destination.droppableId === source.droppableId && 
            destination.index === source.index){ 
                return;
        }

        if(type === 'column'){
            const newColumnOrder = Array.from(items.columnOrder);
            newColumnOrder.splice(source.index, 1);
            newColumnOrder.splice(destination.index, 0 , draggableId);
            itemDispatch({type:'CHANGE_ORDER_TASK', newColumnOrder});
            return;
            
        }

        const start = items.columns[source.droppableId];
        const finish = items.columns[destination.droppableId];

        if(start === finish){
            const newTaskIds = Array.from(start.todoIds);
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);
            
            const newColumn ={
                ...start,
                todoIds: newTaskIds,
            };
            itemDispatch({type:'CHANGE_ORDER_TODO_SAME', newColumn});
            return;    
        }

        //moving from one list to another
        const startTodoIds = Array.from(start.todoIds);
        startTodoIds.splice(source.index, 1);
        const newStart ={
            ...start,
            todoIds: startTodoIds,
        };

        const finishTodoIds = Array.from(finish.todoIds);
        finishTodoIds.splice(destination.index, 0, draggableId);
        const newFinish={
            ...finish,
            todoIds: finishTodoIds,
        };

        itemDispatch({type:'CHANGE_ORDER_TODO', newStart, newFinish});

    }
    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          document.getElementById("addnewtask").click();
        }
      }

    return ( 
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable 
            droppableId="all-column"
            direction="horizontal" 
            type="column">
                {provided => (   
        <div className="main-container" 
        {...provided.droppableProps}
        ref={provided.innerRef}>
            {items.columnOrder.map((columnId, index) => {   
                 const column = items.columns[columnId];
                 const task = column.todoIds.map(todoid => items.todos[todoid]);
                
                 return <TaskContainer task={task} columnname={column} index={index}/>
             })}
            {Object.keys(items.projects).length !== 0 && 
            <div className="addtask"> 
            <input type="text" onChange={handleChange} value={name} onKeyPress={handleKeyPress} placeholder="Enter Task Name"/>
            <button onClick={() => handleAddTask(name, items.displayedProject)} id="addnewtask">Add new Task</button>
             </div>}
             {provided.placeholder}
        </div>
        )}
        </Droppable>
        </DragDropContext>
     );
}
export default MainContainer;