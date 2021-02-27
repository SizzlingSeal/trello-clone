import React, { createContext, useReducer } from 'react';
import {modalReducer} from '../reducer/ModalReducer';

export const ModalContext = createContext();

const ModalContextProvider = (props) =>{
    const [modals, dispatch] = useReducer(modalReducer,[
        {
            id:'addmodal',
            display:false
        },
        {
            id:'helpmodal',
            display:false
        },
        {
            id:'detailsmodal',
            display:false
        },
        {
            id:'addtodomodal',
            display:false
        }

    ]);


    return(
        <ModalContext.Provider value={{modals,dispatch}}>
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalContextProvider;

