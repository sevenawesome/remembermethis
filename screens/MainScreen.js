import React,{useEffect} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import * as  taskActions from '../store/actions/task';
import * as actionActions from '../store/actions/action';
import * as measureActions from '../store/actions/measure';
import * as modalitiesActions from '../store/actions/modality';

const MainScreen = ()=>{
    const hack = 1;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("RUNN!");
        dispatch(taskActions.loadTask()); 
        dispatch(actionActions.loadActions()); 
        dispatch(measureActions.loadMeasures()); 
        dispatch(modalitiesActions.loadModalities()); 
    }, [hack]);

  
    
    const tasks = useSelector(state => state.task.tasks);
    const actions = useSelector(state => state.action.actions);
    const measures = useSelector(state => state.measure.measures);
    const modalities = useSelector(state => state.modality.modalities);

    return (
    <View style={styles.main}>
        <Text>CANTIDAD DE TASKS: {tasks.length}</Text>
        <Text>CANTIDAD DE ACTIONS: {actions.length}</Text>
        <Text>CANTIDAD DE MEASURES: {measures.length}</Text>
        <Text>CANTIDAD DE MODALITY: {modalities.length}</Text>
    </View>
    );
    

};

const styles = StyleSheet.create({
    main:{
        flex:1,
        alignContent: 'space-around',
        justifyContent: 'space-around',
        fontSize:20,
        color:'red'
    }
});

export default MainScreen;