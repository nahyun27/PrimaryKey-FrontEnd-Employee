import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Notice.css';
import {NavLink} from 'react-router-dom';
import Paging from '../modules/Paging.jsx';
import NoticeList from '../components/NoticeList.jsx';
import axios from 'axios';

function Notice(){
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://goote.dev/v1/cs/notice/list', { headers: { Authorization: axios.defaults.headers.common['Authorization']}})

      var data_ = res.data.notices
      setPosts(data_);
      setLoading(false);
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
    <div className="Notice">
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
                  <input className='top' placeholder="검색어를 입력하세요."/>
                  <input className='sear-btn'type='button' value='검색'/>
              </div>
          </li>

          {/* 게시판 목록 */}
          <li className="content">
            <div className="tops">
              <div><h2>공지사항 관리</h2></div>
              <div>
                <NavLink exact to="/NoticeWriting">
                  <button type="button" className='sear-btn option' name="button">글쓰기</button>
                </NavLink>
              </div>
            </div>
              <ul className="ulTable">
                  <li>
                      <ul className="ulTable-inside ulTable-notice">
                          <li>No</li>
                          <li>제목</li>
                          <li>작성일</li>
                          <li>작성자</li>
                          <li>조회수</li>
                      </ul>
                  </li>
                  <NoticeList posts={currentPosts}/>
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

export default Notice;