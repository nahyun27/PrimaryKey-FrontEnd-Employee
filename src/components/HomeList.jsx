import React from 'react';
import getLightDateString from '../modules/LightDateParser';
import {NavLink} from 'react-router-dom';

const HomeList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      return (
        <div className="blank" key={posts[i].attendant_id}>
          {(i% 10 == 0)? <div className="blank"><li>{posts[i].employee_id}</li></div>: ""}
          <li>{getLightDateString(new Date(posts[i].time_in))} <br/> {getLightDateString(new Date(posts[i].time_out))}</li>
          {((i+1)% 10 == 0)? <br/> : ''}
        </div>
      )
    })
  )
}

export default HomeList;