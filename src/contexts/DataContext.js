import React, { createContext, useReducer, useEffect } from 'react';
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
        theme: 'light',
    }, () => {
        const localData = localStorage.getItem('items');
        return localData ? JSON.parse(localData) :
        {
            projects:{},
            columns:{},
            todos:{},
            columnOrder:[],
            projectList:[],
            displayedProject: '',
            selectedTask: '',
        }
    });

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items))
    }, [items])

    return(
        <DataContext.Provider value={{items, itemDispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;
