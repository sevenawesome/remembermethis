import {LOADMEASURES} from "../actions/measure";

const initialState = {
    measures:[],
}

export default (state = initialState,action) =>{
  
    switch(action.type){
       
        case LOADMEASURES:
            return {
                    measures:action.measures,
            };
      
        default:
            return state;
    }
};