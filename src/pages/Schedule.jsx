import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Schedule.css';
import ScheduleList from '../components/ScheduleList.jsx'
import Paging from '../modules/Paging.jsx';
import axios from 'axios';

function Schedule() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://admin.primarykey.shop/schedule', { headers: { Authorization: axios.defaults.headers.common['Authorization']}})

      var data_ = res.data.games
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
    <div className="Schedule">
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
                  <div><h2>직원 스케줄 관리</h2></div>
                  <div className="h3">

                    <select class='selSearchOption option'>
                      <option value='A'>최신순</option>
                      <option value='T'>게시순</option>
                    </select>
                  </div>
                </div>
                  <ul className="ulTable ulTable-schedule">
                      <li>
                          <ul>
                            <li>직원</li>
                            <li>제목</li>
                            <li>작성일</li>
                            <li>작성자</li>
                            <li>조회수</li>
                          </ul>
                      </li>
                      {/* 게시물이 출력될 영역 */}
                      <ScheduleList posts={currentPosts}/>
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