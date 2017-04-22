import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import Workouts from './Workouts';
import WorkoutDescription from './WorkoutDescription';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const { dispatch, exercise } = this.props;
    const { isAuthenticated, errorMessage } = this.props.authReducer;
    return (
      <div className="row">
        <div className="small-centered  small-12 columns text-center">
          <Link to="/"><img className="logoImg" src="logo.png" /></Link>
        </div>

        <Navbar
          isAuthenticated={isAuthenticated}
          errorMessage={errorMessage}
          dispatch={dispatch}
        />

        <Route
          path="/workouts"
          render={() => {
            console.log('fucking saved workout');
            return <Workouts />;
          }}
        />

        <div>
          <Link to="/">Home</Link>
          <Link to="/workouts">Workouts</Link>
        </div>
      </div>
    );
  }
}

var mapStateToProps = (state, props) => {
  return state;
};
export default connect(mapStateToProps)(Main);
