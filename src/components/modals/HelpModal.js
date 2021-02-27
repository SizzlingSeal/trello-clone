import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const HelpModal = (props) => {
    return ( 
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        className="addtaskmodal"
        >
            <h1>About</h1>
            <h2>Created by: John Andre (SizzlingSeal) Andrade</h2>
            <div>
            <div className="helpmodal">
           <label>Personal Github: <a href="https://github.com/SizzlingSeal" target="_blank" title="Github Account"><i class='bx bxl-github'></i></a></label>
           </div>
           <div className="helpmodal">
           <label>Source Code: <a href="https://github.com/SizzlingSeal/trello-clone" target="_blank" title="Source Code"><i className='bx bx-code-block' id="edit" title="Source Code"></i></a></label>
           </div>
           </div>
        </Modal>
     );
}
export default HelpModal;