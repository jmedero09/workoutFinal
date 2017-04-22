import * as redux from 'redux';
import update from 'immutability-helper';
import { combineReducers } from 'redux';
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  QUOTE_REQUEST,
  QUOTE_SUCCESS,
  QUOTE_FAILURE
} from '../actions';

export var addExercise = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EXERCISE':
      return update(state, {
        $push: [
          {
            id: action.id,
            exercise: action.exercise,
            detail: []
          }
        ]
      });

    case 'ADD_EXERCISE_DETAILS':
      var exerciseIndex = state.findIndex(function(exercise) {
        return exercise.id === action.id;
      });
      return update(state, {
        [exerciseIndex]: {
          detail: {
            $push: [
              {
                reps: action.reps,
                weight: action.weight
              }
            ]
          }
        }
      });
    default:
      return state;
  }
};

export var saveWorkout = (state = [], action) => {
  switch (action.type) {
    case 'SAVE_WORKOUT':
      return update(state, {
        $push: [
          {
            workoutLabel: action.workoutLabel,
            date: action.date,
            storedSession: [...state]
          }
        ]
      });
    default:
      return state;
  }
};
export var auth = (
  state = {
    isFetching: false,
    isAuthenticated: !!localStorage.getItem('id_token'),
    errorMessage: ''
  },
  action
) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
        user: action.creds
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: ''
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      });
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      });
    default:
      return state;
  }
};

const workoutReducers = combineReducers({
  auth,
  addExercise,
  saveWorkout
});

export default workoutReducers;
