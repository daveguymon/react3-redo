import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getTasks} from './reducer';
import {connect} from 'react-redux';

class DetailedView extends Component {
  constructor(props){
    super(props);
    this.state={
      title: '',
      description: '',
      completed: false
    }
  }

  componentWillMount(){
    this.props.getTasks();
  }


  componentWillReceiveProps(nextProps){
    console.log("Next props: ", nextProps)
    this.setState({
      taskObj: this.props.tasksArray
    })
  }



  render() {

    let paramsID = this.props.match.params.id;

    let targetTask = this.props.tasksArray.find(task => {
      return task.id == paramsID
    })

    console.log("TargetTask is: ", targetTask, "TargetID is: ", targetTask.id)


    return (
      <div>
        <div className="title">
          <p>Title: {targetTask.title}</p>
        </div>

        <div className="description">
          <p>Description: {targetTask.description}</p>
        </div>

        <div className="backToListAllTasks">
          <Link to="/">
            <p>Back To All Tasks</p>
          </Link>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log("State is: ", state.tasksArray)
  return {
    tasksArray: state.tasksArray
  }
}

export default connect(mapStateToProps, {getTasks})(DetailedView)
