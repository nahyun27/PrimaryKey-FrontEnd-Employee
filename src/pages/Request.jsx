import React, {useState, useEffect} from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Request.css';
import {NavLink} from 'react-router-dom';
import Paging from '../modules/Paging.jsx';
import RequestList from '../components/RequestList.jsx';
import axios from 'axios';

function Request(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/request', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })

      var data_ = res.data.requests
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
    <div className="Request">
      <div className="mainWrapper">
        <ul>
          <li className="content">
            <br/>
            <br/>
              <div className="tops">
                <h2>요청 관리</h2>
                <div className="right h3">
                  <select class='selSearchOption option'>
                    <option value='A'>최신순</option>
                    <option value='T'>게시순</option>
                  </select>
                </div>
              </div>
              <ul className="ulTable">
                <li>
                  <ul className="ulTable-inside2 ulTable-request">
                    <li>요청인</li>
                    <li>요청 종류</li>
                    <li>요청 사항</li>
                    <li>요청 사유</li>
                    <li>상태</li>
                    <li>신청일자</li>
                    <li>관리</li>
                  </ul>
                </li>
                <RequestList posts={currentPosts}/>
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

export default Request;