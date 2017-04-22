import ExerciseTile from './Exercise-Tile';
import React, { Component } from 'react';
import { connect } from 'react-redux';


class ExerciseTileList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    console.log("props in exercise tile",this.props);
    return this.props.exercise.map((exercise, index) => {
      return (
        <li key={exercise.id}>
          <ExerciseTile title={exercise.exercise} detail={exercise.detail} />
        </li>
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
const mapStateToProps = (state, props) => ({ exercise: state.addExercise });
export default connect(mapStateToProps)(ExerciseTileList);
