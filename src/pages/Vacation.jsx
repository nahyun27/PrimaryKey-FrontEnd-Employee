import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Vacation.css';
import {NavLink} from 'react-router-dom';
import Paging from '../modules/Paging.jsx';
import VacationList from '../components/VacationList.jsx';
import axios from 'axios';

function Vacation(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/check/leave/list', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })

      var data_ = res.data.leave
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
    <div className="Vacation">
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
                <h2>휴가 관리</h2>
                <div className="right h3">
                  <select class='selSearchOption option'>
                    <option value='A'>최신순</option>
                    <option value='T'>게시순</option>
                  </select>
                </div>
              </div>
              <ul className="ulTable">
                <li>
                  <ul className="ulTable-inside ulTable-vacation">
                    <li>휴가 번호</li>
                    <li>직원명</li>
                    <li>유형</li>
                    <li>휴가 시작일시</li>
                    <li>휴가 종료일시</li>
                    <li>상태</li>
                  </ul>
                </li>
                <VacationList posts={currentPosts}/>
              </ul>
          </li>
        </ul>
        <div className="pagination">
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

export default Vacation;