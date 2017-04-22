import {connect} from 'react-redux';
import SavedWorkout from './SavedWorkOut';
import {Link, IndexLink} from 'react-router';
import React, { Component } from 'react';

class SavedWorkoutList extends Component{
	constructor(props){
		super(props);
	}
	renderList(){
		console.log(this.props);
		return this.props.saved.saveWorkout.map((savedWorkout,index)=>{
			return(
				<Link to="description"><li key={index}>
					<SavedWorkout workout={savedWorkout.workoutLabel} date={savedWorkout.date}/>
				</li></Link>				
			);
		});
	}
	render(props){
		return (
			<ul className="small-centered  small-12 columns text-center">
				{this.renderList()}
			</ul>
		)
	}	
}
var mapStateToProps = (state, props) => {
  return {
  	saved:state
  }
  
};

export default connect(mapStateToProps) (SavedWorkoutList)