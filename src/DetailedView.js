import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {getTasks} from './reducer';
import axios from 'axios';
import {connect} from 'react-redux';

class DetailedView extends Component {
  constructor(props){
    super(props);
    this.state={
      title: '',
      description: '',
      completed: null
    }
  }

  componentWillMount(){
    this.props.getTasks();
  }

  componentWillReceiveProps(nextProps){
    console.log("Next props: ", nextProps)
    this.setState({
      title: nextProps.tasksArray[this.props.match.params.index].title,
      description: nextProps.tasksArray[this.props.match.params.index].description,
      completed: nextProps.tasksArray[this.props.match.params.index].completed
    })
  }

  handleTitleChange(event){
    this.setState({
      title: event.target.value
    })
  }

  handleTitleChangeSubmit(){
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasksArray[this.props.match.params.index].id}`, {title: this.state.title}).then(response=> {
      this.props.getTasks()
      this.setState({
        title: ''
      })
    }).catch(err => console.log(err))
  }

  handleDescriptionChange(event){
    this.setState({
      description: event.target.value
    })
  }

  handleDescriptionChangeSubmit(){
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasksArray[this.props.match.params.index].id}`, {description: this.state.description}).then(response=>{
      this.props.getTasks()
    }).catch(err => console.log(err))
  }

  cancelTitleChanges(){
    this.setState({
      title: ''
    })
  }

  cancelDescriptionChanges(){
    this.setState({
      description: ''
    })
  }

  completeTask(){
    axios.patch(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasksArray[this.props.match.params.index].id}`, {completed: true}).then(response => {
      this.props.getTasks()
    }).catch(err => console.log(err))
  }

  deleteTask(){
    axios.delete(`https://practiceapi.devmountain.com/api/tasks/${this.props.tasksArray[this.props.match.params.index].id}`).then(response => {
      this.props.getTasks()
    }).catch(err => console.log(err))
  }


  render() {


    return (
      <div>
        <div className="title">
          <p>Title: {this.state.title}</p>
          <input value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
          <Link to="/">
            <button onClick={this.handleTitleChangeSubmit.bind(this)}>SAVE</button>
          </Link>
          <button onClick={this.cancelTitleChanges.bind(this)}>CANCEL CHANGES</button>
        </div>

        <div className="description">
          <p>Description: {this.state.description}</p>
          <input value={this.state.description} onChange={this.handleDescriptionChange.bind(this)}/>
          <Link to="/">
            <button onClick={this.handleDescriptionChangeSubmit.bind(this)}>SAVE</button>
          </Link>
          <button onClick={this.cancelDescriptionChanges.bind(this)}>CANCEL CHANGES</button>
        </div>

        <Link to="/">
        <button onClick={this.completeTask.bind(this)}>COMPLETE</button>
        </Link>

        <Link to="/">
          <button onClick={this.deleteTask.bind(this)}>DELETE</button>
        </Link>


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
