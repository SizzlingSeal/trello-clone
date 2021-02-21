import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');


const SettingsModal = (props) => {
    return ( 
        <Modal
        isOpen={props.isOpen}
        onRequestClose={props.onRequestClose}
        >
            <h1>SETTINGS</h1>

        </Modal>
     );
}
 
export default SettingsModal;