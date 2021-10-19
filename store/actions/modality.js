import Modality from '../../models/modality';

export const LOADMODALITIES =  'LOADMODALITIES';

export const loadModalities = () =>{

  let modalities = [];
  modalities.push(new Modality(1,'AUTOMATIC','It will auto generate after an espesific time.',1));
  modalities.push(new Modality(2,'MANUAL','It will have to click a button generate one more time.',1));

  return dispatch =>{
    dispatch({type:LOADMODALITIES,modalities})
  }
};
