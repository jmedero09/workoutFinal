import { connect } from 'react-redux';
import WorkoutTile from './WorkoutTile';
import { Link, IndexLink } from 'react-router';
import React, { Component } from 'react';

class Workouts extends Component {
  constructor(props) {
    super(props);
  }
  renderList() {
    return this.props.saved.createWorkout.map((WorkoutTile, index) => {
      return (
        <Link to="description">
          <li key={index}>
            <WorkoutTile
              workout={WorkoutTile.workoutLabel}
              date={WorkoutTile.date}
            />
          </li>
        </Link>
      );
    });
  }
  render(props) {
    return (
      <ul className="small-centered  small-12 columns text-center">
        {this.renderList()}
      </ul>
    );
  }
}
var mapStateToProps = (state, props) => {
  return {
    saved: state
  };
};

export default connect(mapStateToProps)(Workouts);
