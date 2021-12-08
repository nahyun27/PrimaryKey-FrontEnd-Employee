import '../styles/common.css';
import '../styles/board.css';
import '../styles/User.css';
import React, {useState, useEffect} from 'react';
import UserList from '../components/UserList.jsx'
import Paging from '../modules/Paging.jsx';
import axios from 'axios';

function User(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(14);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/employee/all', { 
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
    <div className="User">
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
            <h2>회원 정보</h2>
            <div className="h3">
              <select class='selSearchOption option'>
                <option value='A'>id순</option>
                <option value='T'>가입일순</option>
              </select>
            </div>
          </div>
            <ul className="ulTable">
              <li>
                <ul className="ulTable-inside ulTable-user">
                  <li>No</li>
                  <li>이름</li>
                  <li>이메일</li>
                  <li>성별</li>
                  <li>부서명</li>
                  <li>입사일</li>
                  <li>봉급</li>
                </ul>
              </li>
              {console.log(currentPosts)}
              <UserList posts={currentPosts}/>
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

export default User;