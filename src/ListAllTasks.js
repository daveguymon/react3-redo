import React, {Component} from 'react';
import {getTasks} from './reducer';
import {connect} from 'react-redux';
import IndividualTask from './IndividualTask';



class ListAllTasks extends Component {

  render(){

    const listTasks = this.props.tasksArray.map((task, i) => (
      <IndividualTask task={task} key={i} index={i} completed={task.completed}/>
    ))

    return (
      <div>
        <button onClick={this.props.getTasks}>Get All Tasks</button>
        {listTasks}
      </div>
    )
  }
}

function mapStateToProps(state){
  return {tasksArray: state.tasksArray}
}

export default connect(mapStateToProps, {getTasks})(ListAllTasks);
