import React from 'react';
import {NavLink} from 'react-router-dom';
import getLightDateString from '../modules/LightDateParser';

const HomeList = ({posts, loading}) => {
  console.log(posts)
  return (
    Object.keys(posts).map((i) => {
      if(i < 2){
      return ( 
      <NavLink className="ulTable-inside1 ulTable-inside3" to={{
        pathname:"/DetailedNotice",
        aboutProps:{
          post : posts[i]
        }
      }}
      exact>
        <li>{getLightDateString(new Date(posts[i].time_in))} <br/> {getLightDateString(new Date(posts[i].time_out))}</li>
        </NavLink>
      )
    }
    })
  )
}

export default HomeList;


// const HomeList = ({posts, loading}) => {
//   return (
//     Object.keys(posts).map((i) => {
//       return (
//         <div className="blank" key={posts[i].attendant_id}>
//           {(i% 10 == 0)? <div className="blank"><li>{posts[i].employee_id}</li></div>: ""}
//           <li>{getLightDateString(new Date(posts[i].time_in))} <br/> {getLightDateString(new Date(posts[i].time_out))}</li>
//           {((i+1)% 10 == 0)? <br/> : ''}
//         </div>
//       )
//     })
//   )
// }

// export default HomeList;