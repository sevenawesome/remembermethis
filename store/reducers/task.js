import { ADDTASK,LOADTASKS,REMOVETASK,HANDLERTASK} from "../actions/task";

const initialState = {
    tasks: [],
    tasksLog:[]
}

export default (state = initialState,action) =>{

    switch(action.type){

        case LOADTASKS:
                return {
                    ...state,
                    tasks:action.tasks,
                };
        case ADDTASK:
                return {
                    ...state,
                    tasks:[...state.tasks,action.newTask],
                };
        case HANDLERTASK:
        case REMOVETASK:
                return {
                    ...state,
                    tasks: action.tasks,
                };    
        default:
            return state;
    }
};