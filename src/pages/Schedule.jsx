import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Schedule.css';
import {NavLink} from 'react-router-dom';
import Paging from '../modules/Paging.jsx';
import ScheduleList from '../components/ScheduleList.jsx';
import axios from 'axios';

function Schedule(props){
  const [add, setAdd] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  useEffect(() => {
    if (props.location.aboutProps){
      if(props.location.aboutProps.post)
        setAdd(true)
    }
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/schedule/', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })

      var data_ = res.data
      setPosts(data_);
    }

    fetchPosts();
  }, []);


  //현재 페이지 가져오기
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //클릭 이벤트-페이지 바꾸기
  const paginate = pageNum => setCurrentPage(pageNum);
  return(
    <div className="Schedule">
      <div className="mainWrapper">
        <ul>
          {/* 검색 폼 영역 */}
          <li className='liSearchOption'>
            <div>
              <select className='selSearchOption option'>
                <option value='host'>직원명</option>
              </select>
              <input className='search_bar' placeholder="검색어를 입력하세요."/>
              <input className='sear-btn'type='button' value='검색'/>
            </div>
          </li>
          <li className="content">
            <br/>
              <div className="tops">
                <h2>스케줄 관리</h2>
                <div>
                  <NavLink exact to="/ScheduleWriting">
                    <button type="button" className='btn' name="button">스케줄 등록</button>
                  </NavLink>
                </div>
              </div>
              <ul className="ulTable">
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">직원</li>
                    <li>8AM</li>
                    <li>9AM</li>
                    <li>10AM</li>
                    <li>11AM</li>
                    <li>12PM</li>
                    <li>1PM</li>
                    <li>2PM</li>
                    <li>3PM</li>
                    <li>4PM</li>
                    <li>5PM</li>
                    <li>6PM</li>
                    <li>7PM</li>
                    <li>8PM</li>
                    <li>9PM</li>
                  </ul>
                </li>
                {/* <ScheduleList posts={currentPosts}/> */}
                <li>

                {!(add)? 
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김나모</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                  : 
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김나모</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="blank3">12:00PM~5:00PM 인수인계</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                    }
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김나현</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="blank5">12:00PM~5:00PM @경영본부 전략기획팀</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">정종문</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="blank5">2:00PM~7:00PM @경영본부 전략기획팀</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김다예</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">박창선</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="blank5">2:00PM~7:00PM @경영본부 전략기획팀</li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">하혜민</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김철수</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">홍길동</li>
                    <li className="blank-all">연차(1/2)</li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">이용현</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김나모</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li className="blank4">1:00PM~5:00PM 정기교육</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside1 ulTable-schedule">
                    <li className="name">김영희</li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </li>
              </ul>
          </li>
        </ul>
        <div className="pagination">
          {console.log("asdfg", Math.ceil(posts.length / postPerPage))}
          <Paging
            postPerPage={postPerPage}
            totalPosts={posts.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Schedule;