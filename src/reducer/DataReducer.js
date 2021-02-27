import { v4 as uuidv4 } from 'uuid';

export const dataReducer = (state, action) => {
    switch(action.type){
        case 'ADD_PROJECT':
           return {...state, projects:{...state.projects, [action.name]: {
            id:action.name,
            title:action.name,
            tasks:[]
           }}, projectList:[...state.projectList, action.name],
            displayedProject: action.name}
            
        case 'ADD_TASK':
           const project = action.project;
           const setTaskId = uuidv4();
            return {...state, 
                projects:{...state.projects, [project]: {
                ...state.projects[project], tasks:[...state.projects[project].tasks, setTaskId]}},
                
                columns:{ ...state.columns,
                    [setTaskId]: {
                        id: setTaskId,
                        name: action.name,
                        todoIds:[]
                    }},
                    columnOrder:[...state.columnOrder, setTaskId]
                    } 
        case 'ADD_TODO':
            const setTodoId = uuidv4();
                    return {...state, columns:{...state.columns,
                    [action.columnname] :{
                        ...state.columns[action.columnname],
                        todoIds:[...state.columns[action.columnname].todoIds, setTodoId]
                    }},
                    todos: {...state.todos, [setTodoId]: {
                        id: setTodoId,
                        name: action.name,
                        desc: action.desc
                    }}}            
        case 'CHANGE_SELECTED_TASK':
            return{...state, selectedTask: action.ids}
            
        case 'CHANGE_PROJECT':
        return{...state, columnOrder:[...state.projects[action.selected].tasks],
        displayedProject:action.selected}

        case 'CHANGE_ORDER_TODO_SAME':
            return {...state, columns:{...state.columns, [action.newColumn.id]: action.newColumn}}
        
        case 'CHANGE_ORDER_TODO':
            return{...state, 
                columns: {...state.columns, 
                [action.newStart.id]: action.newStart, 
                [action.newFinish.id]: action.newFinish,
            }}

        case 'CHANGE_ORDER_TASK':
            return {...state,  projects:{...state.projects, [state.displayedProject]: {...state.projects[state.displayedProject], tasks: action.newColumnOrder}},
             columnOrder: action.newColumnOrder}

        case 'CHANGE_COLUMN_NAME':
            return {...state, columns:{...state.columns, [action.colId]: {...state.columns[action.colId], name: action.rename} }}

        case 'REMOVE_TODO':
            return{
                ...state,
                columns: {
                    ...state.columns,
                    [action.columnid]: {
                        ...state.columns[action.columnid],
                        todoIds:action.newColumn,
                    },
                },
                todos:action.newTodos
            }

        case 'REMOVE_TASK':
            return{
                ...state,
                projects: {...state.projects, [action.project] : {...state.projects[action.project], tasks: action.newTasks}},
                columns: action.newColumn,
                todos: action.newTodos,
                columnOrder: action.newColumnOrder,
            }
        case 'REMOVE_PROJECT':
            return {
                ...state,
                projects: action.newProjects,
                columns: action.newColumns,
                todos: action.newTodos,
                columnOrder:[],
                projectList: action.newProjectList,

            }

        case 'CHANGE_THEME':
            return{
                ...state,
                theme: action.theme
            }

    }
}