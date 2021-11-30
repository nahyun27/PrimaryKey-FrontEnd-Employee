import '../styles/common.css';
import '../styles/board.css';
import '../styles/Home.css';
import React, {useState, useEffect} from 'react';
import HomeList from '../components/HomeList.jsx'
import Paging from '../modules/Paging.jsx';
import axios from 'axios';


function Home(){
  // const [sortOption, setSortOption] = useState('desc');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('http://admin.primarykey.shop:3000/attendant/', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })
      console.log(res)

      var data_ = res.data
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
    <div className="Home">
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
                  <div><h2>출퇴근 관리</h2></div>
                  <div className="right h3">

                    <select class='selSearchOption option'>
                      <option value='A'>최신순</option>
                      <option value='T'>게시순</option>
                    </select>

                    <select class='selSearchOption option'>
                      <option value='A'>모두</option>
                      <option value='T'>게임개설</option>
                      <option value='C'>모집중</option>
                      <option value='C'>모집완료</option>
                      <option value='C'>게임확정</option>
                      <option value='C'>게임완료</option>
                    </select>
                    
                  </div>
                </div>
                  <ul className="ulTable ulTable-home">
                      <li>
                          <ul>
                              <li>직원</li>
                              <li>5/월</li>
                              <li>6/화</li>
                              <li>7/수</li>
                              <li>8/목</li>
                              <li>5/월</li>
                              <li>6/화</li>
                              <li>7/수</li>
                              <li>8/목</li>
                              <li>5/월</li>
                              <li>6/화</li>
                              <li>7/수</li>
                              <li>8/목</li>
                              <li>5/월</li>
                              <li>6/화</li>
                          </ul>
                      </li>
                      {/* 게시물이 출력될 영역 */}
                      <HomeList posts={currentPosts} loading={loading} />
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

export default Home;