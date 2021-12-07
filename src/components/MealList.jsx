import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const MealList = ({posts}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedMeal",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].employee_meal_id}>
            <ul className="ulTable-inside ulTable-meal"> 
              <li>1</li>
              <li>김나현</li>
              <li>경영부</li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default MealList;

