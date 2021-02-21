import React, {useContext, useState} from 'react';
import {DataContext} from '../contexts/DataContext';
import TaskContainer from './TaskContainer';


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

    return ( 
        <div className="main-container" >
            {items.columnOrder.map(columnId => {   
                 const column = items.columns[columnId];
                 const taskName = column.name;
                 return <TaskContainer taskName={taskName} columnname={column} />
             })}
            {Object.keys(items.projects).length !== 0 && 
            <div className="addtask"> 
            <input type="text" onChange={handleChange} value={name} placeholder="Enter Task Name"/>
             <button onClick={() => handleAddTask(name, items.displayedProject)}>Add new Task</button>
             </div>}
             
           
            
        </div>
     );
}
 
export default MainContainer;