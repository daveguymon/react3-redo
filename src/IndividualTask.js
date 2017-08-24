import React from 'react';
import {Link} from 'react-router-dom';

export default function IndividualTask (props) {

  const completedTaskStyle = {color: 'grey', textDecoration: 'line-through'}

  return (
    <div>
      <Link to={"/" + props.index + "/" + props.task.id}>
        <p style={props.completed ? completedTaskStyle : null}>{props.task.title}</p>
      </Link>
    </div>
  )
}
