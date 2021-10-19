import React from 'react';
import RememberMeThisNavigationContainer from './navigation/RememberMeThisNavigation';
import {createStore,combineReducers,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk';
import taskReducer from './store/reducers/task';
import actionReducer from './store/reducers/action';
import measureReducer from './store/reducers/measure';
import modalityReducer from './store/reducers/modality';

const rootReducer = combineReducers({
  task: taskReducer,
  action:actionReducer,
  measure:measureReducer,
  modality:modalityReducer
});

const store = createStore(rootReducer,applyMiddleware(ReduxThunk));

export default function App() {
  return<Provider store={store}>
        <RememberMeThisNavigationContainer />
  </Provider> 

}

