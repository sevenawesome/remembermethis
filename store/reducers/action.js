import {LOADACTIONS } from "../actions/action";

const initialState = {
    actions:[],
}

export default (state = initialState,action) =>{
  
    switch(action.type){

        case LOADACTIONS:
                return {
                    actions:action.actions,
                };
            
        default:
            return state;
    }
};