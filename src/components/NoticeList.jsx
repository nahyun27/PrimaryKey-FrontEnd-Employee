import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const NoticeList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i].court_name)
      return (
        <NavLink exact to="/DetailedNotice">
          <li key={posts[i].id}>
            <ul className="ulTable-inside ulTable-game"> 
              <li>{posts[i].id}</li>
              <li>{posts[i].title}</li>
              <li>{getDateStringGMT9(new Date(posts[i].createdAt))}</li>
              <li>{posts[i].admin.name}</li>
              <li>0</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default NoticeList;
