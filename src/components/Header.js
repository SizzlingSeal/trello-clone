import React, {useContext, useState} from 'react';
import {Time} from '../contexts/Time';
import AddProjectModal from './modals/AddProjectModal';
import HelpModal from './modals/HelpModal';
import {ModalContext} from '../contexts/ModalContext';
import {DataContext} from '../contexts/DataContext';
import swal from 'sweetalert';

const Header = () => {
    const {time} = useContext(Time);
    const {modals,dispatch} = useContext(ModalContext);
    const {items, itemDispatch} = useContext(DataContext);
    const [selected, setSelected] = useState('');
    document.getElementById('base').setAttribute('data-theme', items.theme);
   
    function handleModal(modal){
        return  () => dispatch({type: 'SHOW_MODAL', id:modal})
    }

    function handleAdd(event,name){
        itemDispatch({type:'ADD_PROJECT', name});
        dispatch({type: 'SHOW_MODAL', id:'addmodal'});
        handleChange(name);
        event.preventDefault();
    }

    function handleChange(selected){
        setSelected(selected);     
        itemDispatch({type:'CHANGE_PROJECT', selected});
    }

    function handleDeleteProject(){
        swal("Are you sure you want to delete this project?", "", "warning", {
            buttons: {
              
              yes:{
                  text:"Yes",
                  value:'Yes'
              },
              cancel: "No",
            },
          })
          .then((value) => {
            switch (value) {
           
              case 'Yes':
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
                   handleChange(document.getElementById('projects').value);
               } else{
                   swal("Warning", "No more projects left.", "warning")
               }
                break;
           
              default:
                  swal("Project not deleted");
                break;
           
            }
          });


        
       
    }
    function toggleTheme(){
     if(document.getElementById('switch').checked === true){
        itemDispatch({type:'CHANGE_THEME', theme:'dark'});
     }else{
        itemDispatch({type:'CHANGE_THEME', theme:'light'});
     }  
    }
    
    return ( 
        <header>
            <div className="organizer">
            <select name="projects" id="projects" onChange={(event) => handleChange(event.target.value)} value={items.displayedProject}>
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
            <input type="checkbox" id="switch" onChange={toggleTheme} checked={items.theme === 'dark' ? true : false} /><label for="switch">Toggle</label>
            <i className='bx bxs-help-circle' id="help"
            onClick={handleModal('helpmodal')} title="About"></i>
            <a>{time}</a>
            </div>
            <AddProjectModal isOpen={modals[0].display} onRequestClose={handleModal('addmodal')} handleAdd={handleAdd}/>
            <HelpModal isOpen={modals[1].display} onRequestClose={handleModal('helpmodal')}/>     
        </header>
     );
}
export default Header;