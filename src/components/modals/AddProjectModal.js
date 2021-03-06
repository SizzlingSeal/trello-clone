import React, {useState} from 'react';
import Modal from 'react-modal';


Modal.setAppElement('#root');


const AddProjectModal = (props) => {
    const [name, setName] = useState('');

    const handleNameChange = (event) =>{
        setName(event.target.value);
    }
    return ( 
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        className="addprojectmodal"
        >
            <h1>Add New Project</h1>
                <form onSubmit={(event) => {props.handleAdd(event,name); setName('');}}>
                <div>
                <label>Project Name:</label>
                <input type="text" value={name} name="name" onChange={handleNameChange} required maxlength="15"/>
                </div>
                <button type="submit"><i className='bx bx-chevron-right-square ' id="addlogo"></i>Add Project</button>
                </form>
        </Modal>
     );
}
export default AddProjectModal;