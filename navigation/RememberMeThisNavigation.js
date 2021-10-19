import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';
import MainScreen from '../screens/MainScreen';
import TaskFormScreen from '../screens/Task/TaskFormScreen';
import ActionScreen from '../screens/Task/ActionScreen';

const defaultNavOptions = {
    headerStyle:{
        backgroundColor: Colors.primary
    }
}

const MainNavigation = createStackNavigator({
    Main:MainScreen,
    Task:TaskFormScreen,
    Action:ActionScreen
},{
    headerMode: 'none'
});

export default createAppContainer(MainNavigation);