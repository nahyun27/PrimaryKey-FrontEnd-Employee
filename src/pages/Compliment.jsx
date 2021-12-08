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
  const [postPerPage] = useState(8);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/service/compliment', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })
      console.log("성공 ", res)
      var data_ = res.data.complimentE
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
            <div className="compli-contents">
              <div className="ranks">
                <div className="rank-half">
                  <div className="rank">
                    <img src={first} className="rank-img" alt=""/>
                    <p>하혜민</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬: 16회</p>
                  </div>
                  <div className="rank">
                    <img src={second} className="rank-img" alt=""/>
                    <p>박창선</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬: 11회</p>
                  </div>
                  <div className="rank">
                    <img src={third} className="rank-img" alt=""/>
                    <p>정종문</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬: 10회</p>
                  </div>
                </div>

                <div className="rank-half">
                  <div className="rank">
                    <img src={four} className="rank-img1" alt=""/>
                    <p>김나현</p>
                    <p>경영지원부</p>
                    <p>받은 칭찬: 8회</p>
                  </div>
                  <div className="rank">
                    <img src={five} className="rank-img1" alt=""/>
                    <p>김다예</p>
                    <p>물품관리부</p>
                    <p>받은 칭찬: 6회</p>
                  </div>
                  <div className="rank">
                    <img src={six} className="rank-img1" alt=""/>
                    <p>홍길동</p>
                    <p>총무부</p>
                    <p>받은 칭찬: 5회</p>
                  </div>
                </div>
              </div>
              <div className="middle-compli">
                <h3>칭찬 게시판</h3>
              </div>
              <ul className="ulTable ul-compli">
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
                  <li>
                      <ul className="ulTable-inside ulTable-compliment">
                          <li>2</li>
                          <li>김다예</li>
                          <li>항상 늦게까지 남아서 뒷정리를 합니다.</li>
                          <li>김나모</li>
                          <li>2021.12.04 11:15:35</li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside ulTable-compliment">
                          <li>3</li>
                          <li>하혜민</li>
                          <li>힘든일 맡기를 꺼려하지 않으십니다.</li>
                          <li>박창선</li>
                          <li>2021.12.04 03:12:32</li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside ulTable-compliment">
                          <li>4</li>
                          <li>정종문</li>
                          <li>제가 실수했을 때 대신 처리해주셨습니다.</li>
                          <li>하혜민</li>
                          <li>2021.12.05 01:16:12</li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside ulTable-compliment">
                          <li>5</li>
                          <li>하혜민</li>
                          <li>남들보다 일찍 퇴근해서 가장 늦게 퇴근하시는 분</li>
                          <li>김나현</li>
                          <li>2021.12.05 12:12:58</li>
                      </ul>
                  </li>
                  <li>
                      <ul className="ulTable-inside ulTable-compliment">
                          <li>6</li>
                          <li>박창선</li>
                          <li>동료들 사이에서 일 잘하기로 유명하십니다.</li>
                          <li>김다예</li>
                          <li>2021.12.04 03:12:32</li>
                      </ul>
                  </li>
              </ul>
            </div>
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

export default Compliment;