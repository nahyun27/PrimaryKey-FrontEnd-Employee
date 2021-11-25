import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const HomeList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i].attendant_id)
      return (
        <NavLink exact to="/DetailedGame">
          <li key={posts[i].attendant_id}>
            <ul className="ulTable-inside ulTable-game"> 
              <li>{posts[i].employee_id}</li>
              <li>{getDateStringGMT9(new Date(posts[i].time_in))} <br/> {getDateStringGMT9(new Date(posts[i].time_out))}</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default HomeList;