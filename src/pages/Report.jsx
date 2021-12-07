import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Report.css';
import {NavLink} from 'react-router-dom';
import Paging from '../modules/Paging.jsx';
import ReportList from '../components/ReportList.jsx';
import axios from 'axios';

function Report(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/suggestion', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })

      var data_ = res.data.suggestions
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
    <div className="Report">
      <div className="mainWrapper">
        <ul>
          {/* 검색 폼 영역 */}
          <li className='liSearchOption'>
              <div>
                  <select className='selSearchOption option'>
                      <option value='A'>제목+내용</option>
                      <option value='T'>제목</option>
                      <option value='C'>내용</option>
                  </select>
                  <input className='search_bar' placeholder="검색어를 입력하세요."/>
                  <input className='sear-btn'type='button' value='검색'/>
              </div>
          </li>

          {/* 게시판 목록 */}
          <li className="content">
            <div className="tops">
              <h2>건의사항 관리</h2>
            </div>
              <ul className="ulTable">
                  <li>
                      <ul className="ulTable-inside ulTable-report">
                          <li>No</li>
                          <li>건의 유형</li>
                          <li>제목</li>
                          <li>작성일</li>
                          <li>작성자</li>
                      </ul>
                  </li>
                  <ReportList posts={currentPosts}/>
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

export default Report;