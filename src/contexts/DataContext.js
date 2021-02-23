import React, { createContext, useReducer } from 'react';
import {dataReducer} from '../reducer/DataReducer';

export const DataContext = createContext();

const DataContextProvider = (props) =>{
    const [items, itemDispatch] = useReducer(dataReducer, {
        projects:{},
        columns:{},
        todos:{},
        columnOrder:[],
        projectList:[],
        displayedProject: '',
        selectedTask: '',
    });

    return(
        <DataContext.Provider value={{items, itemDispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}

export default DataContextProvider;
