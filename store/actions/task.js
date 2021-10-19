import Modality from '../../models/modality';
import Measure from '../../models/measure';
import Action from '../../models/action';
import Task from '../../models/task';
import WeeksDay from '../../models/weekDays;';


export const LOADTASKS =  'LOADTASKS';
export const ADDTASK = 'ADDTASK';
export const REMOVETASK = 'REMOVETASK';
export const PAUSETASK = 'PAUSETASK';
export const RESUMETASK = 'RESUMETASK';


export const loadTask = () =>{

  let tasks = [];
  tasks.push(new Task(
    1,
    'Runtina del trabajo',
    [new Action(1,'look to other way','-',1,new Measure(2,'MINUTES',1),1), new Action(1,'pull push','-',15,new Measure(5,'N/A',1),1)],
    new Modality(1,'AUTOMATIC','It will auto generate after an espesific time.',1),
    new Date(),
    undefined,
    new WeeksDay(false,true,true,true,true,true,false),
    20,
    new Measure(2,'MINUTES',1),
    1
    ));

  return dispatch =>{
    dispatch({type:LOADTASKS,tasks})
  }
};



export const addNewTask = newTask =>{
    console.log("addNewTask");
    return dispatch =>{
      dispatch({type: ADDTASK, newTask});
    }
};