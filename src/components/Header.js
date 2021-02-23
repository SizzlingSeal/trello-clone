import React, {useContext, useState} from 'react';
import {Time} from '../contexts/Time';
import AddProjectModal from './modals/AddProjectModal';
import HelpModal from './modals/HelpModal';
import SettingsModal from './modals/SettingsModal';
import {ModalContext} from '../contexts/ModalContext';
import {DataContext} from '../contexts/DataContext';

const Header = () => {
    const {time} = useContext(Time);
    const {modals,dispatch} = useContext(ModalContext);
    const {items, itemDispatch} = useContext(DataContext);
    const [selected, setSelected] = useState('');
    function handleModal(modal){
        return  () => dispatch({type: 'SHOW_MODAL', id:modal})
        
    }

    function handleAdd(event,name,desc){
        itemDispatch({type:'ADD_PROJECT', name, desc});
        dispatch({type: 'SHOW_MODAL', id:'addmodal'});
        handleChange(name);
        event.preventDefault();
    }

    function handleChange(selected){
        setSelected(selected);     
        itemDispatch({type:'CHANGE_PROJECT', selected});
    }
    function handleDeleteProject(){
        var warning = window.confirm("You are going to delete a project");
        if(warning === true){
            const itemCopy = {...items};
            const project =  document.getElementById("projects").value.toString();
            const newProjectList = items.projectList.filter(e => e !== project);
            const {tasks} =itemCopy.projects[project];
            if(tasks.length > 0){//getting column in projects and deleting in columns
             tasks.forEach(column => {
                 const {todoIds} = itemCopy.columns[column];
                 
                 if(todoIds.length > 0 ){
                     todoIds.forEach(id => {
                         delete itemCopy.todos[id]//delete all todos
                     });
                 };
                 delete itemCopy.columns[column]
             });
           };
           delete itemCopy.projects[project];//final step delete the project
           let newColumns = itemCopy.columns;
           let newTodos = itemCopy.todos;
           let newProjects = itemCopy.projects;
           itemDispatch({type: 'REMOVE_PROJECT',  newProjectList, newColumns, newTodos, newProjects});
           if(items.projectList.length >= 2  ){
               handleChange(items.projectList[1]);
           } else{
               alert("No More Projects")
           }
        }else{
            return;
        }
       
    }
    function toggleTheme(){
        var toggle = document.getElementById('switch')
        if(toggle.checked === true){
            document.getElementById("base").setAttribute('data-theme', 'dark');
        }else{
            document.getElementById("base").setAttribute('data-theme', 'light');
        }
    
    }
    return ( 
        <header>
            <div className="organizer">
            <select name="projects" id="projects" onChange={(event) => handleChange(event.target.value)} value={selected}>
              {Object.keys(items.projects).length !== 0 ? 
              Object.keys(items.projects).map(i => {return <option key={i} value={i}>{i}</option>})
              : <option>Create new project</option> }
            </select>
            <i className='bx bx-book-add bx-tada-hover' id="add" 
            onClick={handleModal('addmodal')} title="Add Project"></i>
            {Object.keys(items.projects).length !== 0 &&  <i className='bx bx-trash-alt bx-tada-hover' id="trashproject" onClick={handleDeleteProject}></i>}
            </div>
            <div className="title">
            <a>Project To Note</a>
            </div>
            <div className="information">
            <input type="checkbox" id="switch" onChange={toggleTheme}/><label for="switch">Toggle</label>
            <i className='bx bxs-help-circle' id="help"
            onClick={handleModal('helpmodal')} title="Help"></i>
            <a>{time}</a>
            </div>
            <AddProjectModal isOpen={modals[0].display} onRequestClose={handleModal('addmodal')} handleAdd={handleAdd}/>
            <HelpModal isOpen={modals[1].display} onRequestClose={handleModal('helpmodal')}/>
            <SettingsModal isOpen={modals[2].display} onRequestClose={handleModal('settingsmodal')}/>       
        </header>
     );
}
 
export default Header;