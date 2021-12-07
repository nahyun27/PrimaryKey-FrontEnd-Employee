import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const ComplimentList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i].created_at)
      return (
        <NavLink exact to="/DetailedMeal">
          <li key={posts[i].compliment_id}>
            <ul className="ulTable-inside ulTable-game"> 
              <li>{posts[i].compliment_id}</li>
              <li>{posts[i].content}</li>
              <li>{getDateStringGMT9(new Date(posts[i].created_at))}</li>
              <li>{posts[i].employee_id}</li>
              <li>0</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default ComplimentList;
