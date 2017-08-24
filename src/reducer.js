import axios from 'axios';

const initialState={
  tasksArray: []
}

const GET_TASKS = 'GET_TASKS';
const GET_TASKS_FULFILLED = 'GET_TASKS_FULFILLED';


export default function reducer(state=initialState, action) {
  switch(action.type){
    case GET_TASKS_FULFILLED:
    console.log("The payload is :", action.payload)
      return Object.assign({}, state, {tasksArray: action.payload.data})

    default:
      return state;
  }
}

export function getTasks(){
  console.log("Reached getTasks in Reducer!")
  return {
    type: GET_TASKS,
    payload: axios.get('https://practiceapi.devmountain.com/api/tasks/')
  }
}
