import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Notice.css';
import '../styles/Compliment.css';
import {NavLink} from 'react-router-dom';
import Paging from '../modules/Paging.jsx';
import ComplimentList from '../components/ComplimentList.jsx';
import axios from 'axios';
import first from '../assets/first.png';
import second from '../assets/second.png';
import third from '../assets/third.png';
import five from '../assets/five.png';
import four from '../assets/four.png';
import six from '../assets/six.png';

function Compliment(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/service/compliment', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })

      console.log(res);
      var data_ = res.data.compliimentE
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
    <div className="Compliment">
      <div className="mainWrapper">
        <ul>
          <li className="content">
            <br/>
            <br/>
            <div className="tops">
              <h2>실시간 우수 직원 순위</h2>
            </div>
            <div className="meal-contents">
              <div className="ranks">
                <div className="rank-half">
                  <div className="rank">
                    <img src={first} className="rank-img" alt=""/>
                    <p>하혜민</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬 횟수 : 16회</p>
                  </div>
                  <div className="rank">
                    <img src={second} className="rank-img" alt=""/>
                    <p>박창선</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬 횟수 : 11회</p>
                  </div>
                  <div className="rank">
                    <img src={third} className="rank-img" alt=""/>
                    <p>정종문</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬 횟수 : 10회</p>
                  </div>
                </div>

                <div className="rank-half">
                  <div className="rank">
                    <img src={first} className="rank-img" alt=""/>
                    <p>김나현</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬 횟수 : 8회</p>
                  </div>
                  <div className="rank">
                    <img src={second} className="rank-img" alt=""/>
                    <p>김다예</p>
                    <p>물품관리부</p>
                    <p>받은 칭찬 횟수 : 6회</p>
                  </div>
                  <div className="rank">
                    <img src={third} className="rank-img" alt=""/>
                    <p>홍길동</p>
                    <p>총무부</p>
                    <p>받은 칭찬 횟수 : 5회</p>
                  </div>
                </div>
              </div>
            </div>
              <ul className="ulTable">
                  <li>
                      <ul className="ulTable-inside ulTable-compliment">
                          <li>No</li>
                          <li>칭찬 직원</li>
                          <li>제목</li>
                          <li>작성자</li>
                          <li>작성일</li>
                      </ul>
                  </li>
                  <ComplimentList posts={currentPosts}/>
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

export default Compliment;