import { ADDTASK,LOADTASKS } from "../actions/task";

const initialState = {
    tasks: [],
}

export default (state = initialState,action) =>{
  
    switch(action.type){
        case ADDTASK:
            return {
                tasks:[...tasks,action.newTask],
            };
        case LOADTASKS:
                return {
                        tasks:action.tasks,
            };
            
        default:
            return state;
    }
};