import React, {useState} from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const AddTodoModal = (props) => {
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');
    
    function handleNameChange(event){
        setName(event.target.value);
    }

    function handleDescChange(event){
        setDesc(event.target.value);
    }

    return ( 
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        className="addtaskmodal">
        <h1>Add Task</h1>
        <form onSubmit={(event) => {props.passTodo(event,name,desc); setName(''); setDesc(''); }}>
        <div>
        <label>Task Name:</label>
        <input type="text" onChange={handleNameChange} required maxlength="25"/>
        </div>
        <div>
        <label>Task Description:</label>
        <textarea required onChange={handleDescChange}>
        </textarea>
        </div>
        <button>Add task</button>
        </form>
        </Modal>
     );
}
export default AddTodoModal;