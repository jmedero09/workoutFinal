import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise';
import { reducer as form } from 'redux-form';
import { addExercise, saveWorkout, auth } from '../reducers/reducers';

export const configure = (initialState = {}) => {
  const reducer = combineReducers({
    addExercise,
    saveWorkout,
    form,
    auth
  });

  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleware(reducer);
  return store;
};
