import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import SavedWorkoutList from './SavedWorkoutList';
import WorkoutDescription from './WorkoutDescription';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('main');
    console.log(this.props);
    const { dispatch, exercise } = this.props;
    const { isAuthenticated, errorMessage } = this.props.auth;
    return (
      <div className="row">
        <div className="small-centered  small-12 columns text-center">
          <Link to="/"><img className="logoImg" src="logo.png" /></Link>
        </div>

        <Navbar isAuthenticated={isAuthenticated} errorMessage={errorMessage} dispatch={dispatch} />
        

        <Route exact={true}path="/dashboard" render={() => {
          console.log('fucking dashboard');
          return <Dashboard isAuthenticated={isAuthenticated} dispatch={dispatch} />;
        }} />

        <Route path="/savedworkout" render={() => {
          console.log('fucking saved workout');
          return <SavedWorkoutList/>
        }} />

        <div>
          <Link to="/">Home</Link>
          <Link to="/savedworkout">Workouts</Link>
        </div>
      </div>
    );
  }
}

var mapStateToProps = (state, props) => {
  return state;
};
export default connect(mapStateToProps)(Main);
