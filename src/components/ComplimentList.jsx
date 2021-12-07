import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const ComplimentList = ({posts}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedCompliment",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].compliment_id}>
            <ul className="ulTable-inside ulTable-compliment"> 
              <li>{posts[i].compliment_id}</li>
              <li>칭찬직원</li>
              <li>{posts[i].content}</li>
              <li>작성자</li>
              <li>{getDateStringGMT9(new Date(posts[i].created_at))}</li>
            </ul>
          </li>  
        </NavLink>
      )
    })
  )
}

export default ComplimentList;
