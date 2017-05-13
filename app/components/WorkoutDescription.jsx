import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { AddExerciseDetailsReducer } from '../reducers/reducers';
import SetRep from './SetReps';

class WorkoutDescription extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log( this.props.description.exercises);
    let exercises = this.props.description.exercises.map((exercise, index) => {
      let sets_reps = exercise.sets_reps.map(item => (
        <SetRep key={index} set={++index} weight={item.weight} reps={item.reps} />
      ));
      return (
        <div key={index}>
          <h1>{exercise.name}</h1>
          {sets_reps}
        </div>
      );
    });

    return (
      <div className="exercise-tile small-12 columns text-center">
        {exercises}
      </div>
    );
  }
}
var mapStateToProps = (state) => {
  return {
    description: state.exerciseReducer
  };
};
export default connect(mapStateToProps)(WorkoutDescription);
