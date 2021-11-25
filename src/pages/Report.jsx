import { Component } from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Notice.css';
import Paging from '../modules/Paging.jsx';

class Notice extends Component {
  render(){
    return(
      <div className="Notice">
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
                    <div><h2>건의사항 관리</h2></div>
                    <div className="h3">

                      <select class='selSearchOption option'>
                        <option value='A'>최신순</option>
                        <option value='T'>게시순</option>
                      </select>
                      
                    </div>
                  </div>
                    <ul className="ulTable ulTable-notice">
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
                        <li onclick="location.href='./detailedWriting.php'">
                          <ul>
                            <li>1</li>
                            <li className="left">제목제목제목제목1</li>
                            <li>2014.07.09</li>
                            <li>김나모</li>
                            <li>5</li>
                          </ul>
                        </li>
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
}

export default Notice;