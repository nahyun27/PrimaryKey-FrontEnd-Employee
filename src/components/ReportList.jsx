import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const ReportList = ({posts}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedReport",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].suggestion_id}>
            <ul className="ulTable-inside ulTable-report"> 
              <li>{posts[i].suggestion_id}</li>
              <li>{posts[i].suggestion_type}</li>
              <li>{posts[i].title}</li>
              <li>{getDateStringGMT9(new Date(posts[i].created_at))}</li>
              <li>{posts[i].employee.name}</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default ReportList;

