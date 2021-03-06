import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';
import TimeList from './TimeList.jsx';

const ScheduleList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedSchedule",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].schedule_id}>
            <ul className="ulTable-inside ulTable-request"> 
              <li>{posts[i].employee.name}</li>
              <TimeList posts={posts[i]}/>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default ScheduleList;