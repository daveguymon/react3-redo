import React from 'react';
import {Link} from 'react-router-dom';

export default function IndividualTask (props) {

  {console.log("The task object is: ", props.task)}
  return (
    <div>
      <Link to={"/" + props.task.id}>
        <p>{props.task.title}</p>
      </Link>
    </div>
  )
}
