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
       const project =  document.getElementById("projects").value.toString();
       console.log(project);
       const newProjectList = items.projectList.filter(e => e !== project);
       console.log(newProjectList);
       
       
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
            {Object.keys(items.projects).length !== 0 &&  <i className='bx bx-trash-alt bx-tada-hover' id="trashproject" onClick={() => handleDeleteProject()}></i>}
            </div>
            <div className="title">
            <a>Project To Note</a>
            </div>
            <div className="information">
            <i className='bx bxs-wrench' id="settings"
            onClick={handleModal('settingsmodal')} title="Settings"></i>
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