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
      console.log("Home: ", res)

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
                      <ul className="table-head">
                        <li className="name">직원</li>
                        <li>29/월</li>
                        <li>30/화</li>
                        <li>1/수</li>
                        <li>2/목</li>
                        <li>3/금</li>
                        <li className="sat">4/토</li>
                        <li className="sun">5/일</li>
                        <li>6/월</li>
                        <li>7/화</li>
                        <li>8/수</li>
                        <li>9/목</li>
                        <li>10/금</li>
                        <li className="sat">11/토</li>
                        <li className="sun">12/일</li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">김나현</li>
                        <HomeList posts={currentPosts}/>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>9:03<br/>19:00</li>
                        <li>8:30<br/>19:21</li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">김다예</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li className="vac1">연차<br/>휴가</li>
                        <li className="vac1">연차<br/>휴가</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li>8:59<br/>18:49</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">하혜민</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>?</li>
                        <li>8:50<br/>19:11</li>
                        <li className="absent">결근</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li>8:30<br/>19:21</li>
                        <li>9:10<br/>19:01</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">박창선</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:30<br/>19:21</li>
                        <li>8:50<br/>19:11</li>
                        <li>8:53<br/>18:59</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li>8:30<br/>19:21</li>
                        <li>9:10<br/>19:01</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">정종문</li>
                        <li>9:44<br/>19:29</li>
                        <li className="vac1">연차<br/>휴가</li>
                        <li className="vac1">연차<br/>휴가</li>
                        <li>8:59<br/>18:49</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>?</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>

                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">김나현</li>
                        <HomeList posts={currentPosts}/>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>9:03<br/>19:00</li>
                        <li>8:30<br/>19:21</li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">김다예</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li>8:59<br/>18:49</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li className="vac1">연차<br/>휴가</li>
                        <li className="vac1">연차<br/>휴가</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">하혜민</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>?</li>
                        <li>8:50<br/>19:11</li>
                        <li>8:39<br/>19:15</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li className="absent">결근</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li>8:30<br/>19:21</li>
                        <li>9:10<br/>19:01</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">박창선</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:30<br/>19:21</li>
                        <li>8:50<br/>19:11</li>
                        <li>8:53<br/>18:59</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>19:11</li>
                        <li>8:30<br/>19:21</li>
                        <li>9:10<br/>19:01</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside1">
                        <li className="name">정종문</li>
                        <li>9:44<br/>19:29</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li>8:59<br/>18:49</li>
                        <li>9:02<br/>19:00</li>
                        <li><br/></li>
                        <li><br/></li>
                        <li>8:39<br/>19:15</li>
                        <li>9:00<br/>19:01</li>
                        <li>9:01<br/>?</li>
                        <li>8:53<br/>18:59</li>
                        <li>8:50<br/>19:11</li>
                        <li><br/></li>
                        <li><br/></li>
                      </ul>
                  </li>
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