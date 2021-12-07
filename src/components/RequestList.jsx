import React from 'react';
import getDateStringGMT9 from '../modules/DateParser';
import {NavLink} from 'react-router-dom';

const RequestList = ({posts, loading}) => {
  return (
    Object.keys(posts).map((i) => {
      console.log("asdf", posts[i])
      return (
        <NavLink to={{
          pathname:"/DetailedRequest",
          aboutProps:{
            post : posts[i]
          }
        }}
        exact>
          <li key={posts[i].request_id}>
            <ul className="ulTable-inside ulTable-request"> 
              <li>{posts[i].request_id}</li>
              <li>{posts[i].request_type}</li>
              <li>{posts[i].content}</li>
              <li>작성자(요청인)</li>
              <li>{posts[i].request_type}</li>
              <li>{getDateStringGMT9(new Date(posts[i].created_at))}</li>
              <li>
                <button className='btn-req' type="button" name="button" onclick="">승인</button>
                <button className='btn-req' type="button" name="button" onclick="">거절</button>
              </li>
            </ul>
          </li> 
        </NavLink>
      )
    })
  )
}

export default RequestList;

// "requests": [
//   {
//       "request_id": 1,
//       "request_type": "1",
//       "title": "Firsttitle",
//       "content": "FirstContent",
//       "result": "result",
//       "date": "2021-11-30",
//       "created_at": "2021-11-30T16:06:45.000Z",
//       "updated_at": "2021-11-30T16:06:49.000Z",
//       "is_deleted": "N",
//       "employee_id": 4,
//       "is_approved": null


// <li>1</li>
// <li className="left">퇴근 요청</li>
// <li>첨부파일</li>
// <li>김나모</li>
// <li>대기중</li>
// <li>2021/08/30 20:15</li>
// <li>
//   <button type="button" name="button" onclick="">승인</button>
//   <button type="button" name="button" onclick="">거절</button>
// </li>