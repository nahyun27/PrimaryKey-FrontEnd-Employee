import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const NoticeList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedNotice",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].employee_notice_id}>
            <ul className="ulTable-inside ulTable-notice"> 
              <li>{posts[i].employee_notice_id}</li>
              <li>{posts[i].notice_title}</li>
              <li>{getDateStringGMT9(new Date(posts[i].created_at))}</li>
              <li>{posts[i].notice_writer}</li>
              <li>{posts[i].view_count}</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default NoticeList;

