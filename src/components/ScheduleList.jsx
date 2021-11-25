import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const ScheduleList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i].court_name)
      return (
        <NavLink exact to="/DetailedSchedule">
          <li key={posts[i].id}>
            <ul className="ulTable-inside ulTable-game"> 
              <li>{posts[i].id}</li>
              <li>{posts[i].court_name}</li>
              <li>{getDateStringGMT9(new Date(posts[i].start_date))}</li>
              <li>남 : {posts[i].ntrp_man}, 여 : {posts[i].ntrp_woman}</li>
              <li>{posts[i].user.profile.nickname}</li>
              <li>{posts[i].status}</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default ScheduleList;