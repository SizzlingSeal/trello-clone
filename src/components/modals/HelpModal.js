import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const HelpModal = (props) => {
    return ( 
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        >
            <h1>Help</h1>

        </Modal>
     );
}
 
export default HelpModal;