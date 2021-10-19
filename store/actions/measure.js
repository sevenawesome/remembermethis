import Measure from '../../models/measure';

export const LOADMEASURES =  'LOADMEASURES';

export const loadMeasures = () =>{

  let measures = [];
  measures.push(new Measure(1,'HOURS',1));
  measures.push(new Measure(2,'MINUTES',1));
  measures.push(new Measure(3,'SECONDS',1));
  measures.push(new Measure(4,'KILOMETERS',1));
  measures.push(new Measure(5,'N/A',1));

  return dispatch =>{
    dispatch({type:LOADMEASURES,measures})
  }
};

