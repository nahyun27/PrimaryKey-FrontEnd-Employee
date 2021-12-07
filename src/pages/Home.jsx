import '../styles/common.css';
import '../styles/board.css';
import '../styles/Home.css';
import React, {useState, useEffect} from 'react';
import HomeList from '../components/HomeList.jsx'
import Paging from '../modules/Paging.jsx';
import axios from 'axios';


function Home(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/attendant/', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })
      console.log(res)

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
                  <input className='search_bar' placeholder="검색어를 입력하세요."/>
                  <input className='sear-btn'type='button' value='검색'/>
              </div>
          </li>

          {/* 게시판 목록 */}
          <li className="content">
            <div className="tops">
              <h2>출퇴근 관리</h2>
            </div>
              <ul className="ulTable">
                  <li>
                      <ul className="ulTable-inside ulTable-home">
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
                  <HomeList posts={currentPosts}/>
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

export default Home;