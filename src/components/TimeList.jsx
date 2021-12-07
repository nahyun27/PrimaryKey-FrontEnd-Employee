import React from 'react';
import getLightDateString from '../modules/LightDateParser';
import {NavLink} from 'react-router-dom';


const TimeList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <li></li>
      )
    })
  )
}

export default TimeList;

