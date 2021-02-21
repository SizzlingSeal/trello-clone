

export const modalReducer = (state, action) => {
    switch(action.type){
        case 'SHOW_MODAL':
            var newState = state.map(project => {
                if(project.id === action.id)
                return Object.assign({}, project, {display:!project.display});
                return project;
            });
            return newState;  
    }
}