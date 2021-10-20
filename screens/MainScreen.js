import React,{useEffect} from 'react';
import {View,Text,StyleSheet,Button} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import * as  taskActions from '../store/actions/task';
import * as actionActions from '../store/actions/action';
import * as measureActions from '../store/actions/measure';
import * as modalitiesActions from '../store/actions/modality';
import Modality from '../models/modality';
import Measure from '../models/measure';
import Action from '../models/action';
import Task from '../models/task';
import WeeksDay from '../models/weekDays;';


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

    const toTestMethod = ()=>{
        console.log("toTestMethod()");
        dispatch(taskActions.addNewTask(new Task(
            2,
            'TEST 2',
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
            )));
    };

    const toTestMethodTwo = action =>{
        console.log("toTestMethodTwo, action: "+action);
        if(action === 1)
            dispatch(taskActions.removeTask(false,1))
        else if (action === 2)
            dispatch(taskActions.removeTask(true,1))
        else if (action === 3)
            dispatch(taskActions.restoreTask(1))
        else if (action === 4)
            dispatch(taskActions.handleTask(1,1))
        else if (action === 5)
            dispatch(taskActions.handleTask(1,1))
        else if (action === 6)
            dispatch(taskActions.handleTask(0,1))
    };
    
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
        <Button title="Add Task" onPress={toTestMethod} />
        <Button title="Remove Temp" onPress={()=>toTestMethodTwo(1)} />
        <Button title="Restore Temp" onPress={()=>toTestMethodTwo(3)} />
        <Button title="Remove Real" onPress={()=>toTestMethodTwo(2)} />
        <Button title="Start Task" onPress={()=>toTestMethodTwo(4)} />
        <Button title="Pause Task" onPress={()=>toTestMethodTwo(5)} />
        <Button title="Stop Task" onPress={()=>toTestMethodTwo(6)} />
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