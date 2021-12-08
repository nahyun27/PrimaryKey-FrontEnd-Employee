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
  const [ok, setOk] = useState(false);
  const [rej, setRej] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(15);

  const onOkHandler = () => {
    alert('승인되었습니다.')
    setOk(true)
  }
  const onNoHandler = () => {
    alert("거절되었습니다.")
    setRej(true)
  }

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
                    <li>No</li>
                    <li>요청인</li>
                    <li>요청 종류</li>
                    <li>요청 사항</li>
                    <li>신청일자</li>
                    <li>상태 및 관리</li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside2 ulTable-request"> 
                    <li><p>1</p></li>
                    <li><p>김나현</p></li>
                    <li><p>휴가 요청</p></li>
                    <li><p>2021.12.11~2021.12.13</p></li>
                    {/* <li><p>대기중</p></li> */}
                    <li><p>2021.12.01 01:03:47</p></li>
                    {!(ok)? 
                    <li className="buttons">
                      <div>
                        <button className='btn-req1' type="button" name="button" onClick={onOkHandler}>승인</button>
                        <button className='btn-req' type="button" name="button" onClick={onNoHandler}>거절</button>
                      </div>
                    </li>
                    :
                    <li className="buttons">
                      <p className="okay">승인됨</p>
                    </li>
                  }
                  </ul>
                </li> 
                <RequestList posts={currentPosts}/>
                <li>
                  <ul className="ulTable-inside2 ulTable-request"> 
                    <li><p>8</p></li>
                    <li><p>김다예</p></li>
                    <li><p>병가 요청</p></li>
                    <li><p>코로나 증상이 의심됩니다.</p></li>
                    <li><p>2021.12.07 07:04:13</p></li>
                    {!(rej)? 
                    <li className="buttons">
                      <div>
                      <button className='btn-req1' type="button" name="button" onClick={onOkHandler}>승인</button>
                      <button className='btn-req' type="button" name="button" onClick={onNoHandler}>거절</button>
                      </div>
                    </li>
                    :
                    <li className="buttons">
                      <p className="rej">거절됨</p>
                    </li>
                    }
                  </ul>
                </li> 
                <li>
                  <ul className="ulTable-inside2 ulTable-request"> 
                    <li><p>9</p></li>
                    <li><p>김나모</p></li>
                    <li><p>상담 요청</p></li>
                    <li><p>사내 따돌림으로 인한 퇴사 상담 요청</p></li>
                    <li><p>2021.12.07 15:04:32</p></li>
                    <li className="buttons">
                      <p className="rej">거절됨</p>
                    </li>
                  </ul>
                </li> 
                <li>
                  <ul className="ulTable-inside2 ulTable-request"> 
                    <li><p>10</p></li>
                    <li><p>정종문</p></li>
                    <li><p>휴가 요청</p></li>
                    <li><p>여행 가고 싶습니다</p></li>
                    <li><p>2021.12.06 04:04:49</p></li>
                    <li className="buttons">
                      <p className="okay">승인됨</p>
                    </li>
                  </ul>
                </li> 
                <li>
                  <ul className="ulTable-inside2 ulTable-request"> 
                    <li><p>11</p></li>
                    <li><p>박창선</p></li>
                    <li><p>조퇴 요청</p></li>
                    <li><p>개인사정</p></li>
                    <li><p>2021.12.06 01:03:29</p></li>
                    <li className="buttons">
                    <p className="okay">승인됨</p>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul className="ulTable-inside2 ulTable-request"> 
                    <li><p>12</p></li>
                    <li><p>하혜민</p></li>
                    <li><p>휴가 요청</p></li>
                    <li><p>크리스마스 기간 여행</p></li>
                    <li><p>2021.12.06 01:03:29</p></li>
                    <li className="buttons">
                    <p className="okay">승인됨</p>
                    </li>
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

export default Request;