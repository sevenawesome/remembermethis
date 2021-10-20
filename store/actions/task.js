import Modality from '../../models/modality';
import Measure from '../../models/measure';
import Action from '../../models/action';
import Task from '../../models/task';
import WeeksDay from '../../models/weekDays;';


export const LOADTASKS =  'LOADTASKS';
export const ADDTASK = 'ADDTASK';
export const REMOVETASK = 'REMOVETASK';
export const HANDLERTASK = 'HANDLERTASK';



export const loadTask = () =>{

  let tasks = [];
  tasks.push(new Task(
    1,
    'Runtina del trabajo',
    [new Action(1,'look to other way','-',1,new Measure(2,'MINUTES',1),1), new Action(1,'pull push','-',15,new Measure(5,'N/A',1),1)],
    new Modality(1,'AUTOMATIC','It will auto generate after an espesific time.',1),
    new Date(),
    undefined,
    undefined,
    new WeeksDay(false,true,true,true,true,true,false),
    20,
    new Measure(2,'MINUTES',1),
    false,
    false,
    1
    ));

  return dispatch =>{
    dispatch({type:LOADTASKS,tasks:tasks})
  }
};



export const addNewTask = newTask =>{
    return dispatch =>{
      dispatch({type: ADDTASK, newTask : newTask});
    }
};


export const removeTask = (isReal,id) =>{
  return (dispatch,getState) =>{
    const temp = [...getState().task.tasks];
    let newTaskList = []
    if(isReal){
      newTaskList = temp.filter(task => task.id != id);
      //EliminatedDate shoud be here
    }else{
      newTaskList = temp.map(taskTemp=>{
        if(taskTemp.id === id){
          taskTemp.state = 0;
          taskTemp.disabledDate = new Date();
        }
        return taskTemp;
      }); 
    }
    dispatch({type: REMOVETASK, tasks: newTaskList});
  }
};

export const restoreTask = (id) =>{
  return (dispatch,getState) =>{
    const temp = [...getState().task.tasks];
      
    const newTaskList = temp.map(taskTemp=>{
        if(taskTemp.id === id){
          taskTemp.state = 1;
          taskTemp.disabledDate = undefined;
        }
        return taskTemp;
      }); 

    dispatch({type: REMOVETASK, tasks: newTaskList});
  }
};


export const handleTask = (action,id) =>{
  return (dispatch,getState) =>{
    const temp = [...getState().task.tasks];
      
    const newTaskList = temp.map(taskTemp=>{
        if(taskTemp.id === id){
          switch(action){
            case 1:
              //Running
              taskTemp.isRunning = true;
              taskTemp.isPause = false;
            break;
            case 2:
              //Pause
              taskTemp.isPause = true;
              taskTemp.isRunning = false;  
              break;
            default:
              //Stop
              taskTemp.isPause = false;
              taskTemp.isRunning = false;  
            
          }
        }
        return taskTemp;
      }); 

    dispatch({type: HANDLERTASK, tasks: newTaskList});
  }
};


