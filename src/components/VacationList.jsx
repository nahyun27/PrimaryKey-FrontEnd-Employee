import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const VacationList = ({posts}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedVacation",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].leave_id}>
            <ul className="ulTable-inside ulTable-vacation"> 
              <li>{posts[i].leave_id}</li>
              <li>{posts[i].employee.name}</li>
              <li>{posts[i].leave_type}</li>
              <li>{getDateStringGMT9(new Date(posts[i].start_date))}</li>
              <li>{getDateStringGMT9(new Date(posts[i].end_date))}</li>
              <li>승인됨</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default VacationList;