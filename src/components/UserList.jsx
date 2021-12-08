import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import getDept from '../modules/DeptParser';
import {NavLink} from 'react-router-dom';


const UserList = ({posts}) => {
  return (
    Object.keys(posts).map((i) => {

      return (
        <NavLink to={{
          pathname:"/DetailedUser",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].employee_id}>
            <ul className="ulTable-inside ulTable-user"> 
              <li>{posts[i].employee_id}</li>
              <li>{posts[i].name}</li>
              <li>{posts[i].email}</li>
              <li>{(posts[i].gender==1) ? "남" : "여"}</li>
              <li>{getDept(posts[i].department_id)}</li>
              {/* <li>{getDateStringGMT9(new Date(posts[i].updatedAt))}</li> */}
              <li>{getDateStringGMT9(new Date(posts[i].created_at))}</li>
              <li>{posts[i].salary}</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default UserList;