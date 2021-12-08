import '../../styles/common.css';
import '../../styles/writing.css';
import '../../styles/Detailed.css';
import getDateStringGMT9 from '../../modules/DateParser';
import profile from '../../assets/profile.jpeg';

import {NavLink} from 'react-router-dom';

const DeteiledUser = (props) => {
  const data = props.location.aboutProps.post
  console.log(data)
  return(
    <div className="DeteiledUser">
      <div className="container">
        <div className="tops-detailed">
          <h2>유저 상세정보</h2>
          <div className="buttons">
            <NavLink exact to="/User">
              <button type="button" className="btn">이전</button>
            </NavLink>
          </div>
        </div>
        
        <div className="writing-box">
          <div className="main-info1">
            <div className="information">
              <h3>프로필 정보</h3>
              <hr/>
              <div className="profile-box">
                <div className="user-half">
                  <div className="img-box">
                    <img className="img" src={profile} alt=""/>
                  </div>
                </div>
                <div className="half-text">
                  <p className="name-inform">{data.name}</p>
                  <p>id : {data.employee_id}</p>
                  <p>성별 : {(data.gender==1) ? "남" : "여"}</p>
                  <p>email : {data.email}</p>
                  <p>입사일 : {getDateStringGMT9(new Date(data.created_at))}</p>
                </div>
              </div>
            </div>
            <div className="information">
              <h3>개인 정보</h3>
              <hr/>
              <p>생일 : {data.birth}</p>
              <p>봉급 : {data.salary}</p>
              <p>주소 : {data.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default DeteiledUser;