import {LOADMODALITIES} from "../actions/modality";

const initialState = {
    modalities:[]
}

export default (state = initialState,action) =>{
  
    switch(action.type){

        case LOADMODALITIES:
            return {
                modalities:action.modalities,
            };
       
        default:
            return state;
    }
};