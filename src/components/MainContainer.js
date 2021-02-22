import React, {useContext, useState} from 'react';
import {DataContext} from '../contexts/DataContext';
import TaskContainer from './TaskContainer';
import { DragDropContext } from 'react-beautiful-dnd';


const MainContainer = () => {
    const {items, itemDispatch} = useContext(DataContext);
    const [name, setName] = useState('');

    function handleAddTask(name, project){
        if(name.length === 0 ){
            alert("Enter Task Name!");
        }else{
        setName('');
        itemDispatch({type:'ADD_TASK', name, project});
    }
    }
    function handleChange(event){
        setName(event.target.value);
    }

    const onDragEnd = result => {
        const{destination, source, draggableId} = result;
        if(!destination){
            return;
        }
        if(destination.droppableId === source.droppableId && 
            destination.index === source.index){ alert("nani");
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

    return ( 
        <DragDropContext onDragEnd={onDragEnd}>
        <div className="main-container" >
            {items.columnOrder.map(columnId => {   
                 const column = items.columns[columnId];
                 const task = column.todoIds.map(todoid => items.todos[todoid]);
                
                 return <TaskContainer task={task} columnname={column} />
             })}
            {Object.keys(items.projects).length !== 0 && 
            <div className="addtask"> 
            <input type="text" onChange={handleChange} value={name} placeholder="Enter Task Name"/>
            <button onClick={() => handleAddTask(name, items.displayedProject)}>Add new Task</button>
             </div>}
        </div>
        </DragDropContext>
     );
}
 
export default MainContainer;