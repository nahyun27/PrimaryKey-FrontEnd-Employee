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
                  <li>
                    <ul className="ulTable-inside ulTable-report"> 
                      <li>2</li>
                      <li>시설물 관리</li>
                      <li>1층 소파 파손</li>
                      <li>2021-12-01 02:40:18</li>
                      <li>김다모</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="ulTable-inside ulTable-report"> 
                      <li>3</li>
                      <li>기타 사항</li>
                      <li>흡연구역 변경 요청</li>
                      <li>2021-12-01 06:40:18</li>
                      <li>정종문</li>
                    </ul>
                  </li> 
                  <li>
                    <ul className="ulTable-inside ulTable-report"> 
                      <li>4</li>
                      <li>시설물 관리</li>
                      <li>3D 안경 분실 예방을 위한...</li>
                      <li>2021-12-03 01:23:18</li>
                      <li>하혜민</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="ulTable-inside ulTable-report"> 
                      <li>5</li>
                      <li>문의 사항</li>
                      <li>어제 올라온 공지에 대하여</li>
                      <li>2021-12-04 12:23:18</li>
                      <li>하혜민</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="ulTable-inside ulTable-report"> 
                      <li>6</li>
                      <li>기타 사항</li>
                      <li>이벤트 관리가 제대로 이뤄지지 않고 있습니다.</li>
                      <li>2021-12-04 12:23:18</li>
                      <li>김다예</li>
                    </ul>
                  </li>
                  <li>
                    <ul className="ulTable-inside ulTable-report"> 
                      <li>7</li>
                      <li>시설물 관리</li>
                      <li>매표소 벽걸이 시계 고장</li>
                      <li>2021-12-04 17:23:18</li>
                      <li>박창선</li>
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

export default Report;