import Measure from '../../models/measure';
import Action from '../../models/action';

export const LOADACTIONS =  'LOADACTIONS';
export const ADDACTION = 'ADDACTION';
export const REMOVEACTION = 'REMOVEACTION';

export const loadActions = () =>{

  let actions = [];
  actions.push(new Action(1,'pull ups','-',15,new Measure(5,'N/A',1),1));
  actions.push(new Action(1,'pull push','-',15,new Measure(5,'N/A',1),1));
  actions.push(new Action(1,'look to other way','-',1,new Measure(2,'MINUTES',1),1));


  return dispatch =>{
    dispatch({type:LOADACTIONS,actions})
  }
};
