import { Component } from 'react';
import '../styles/common.css';
import '../styles/board.css';
import '../styles/Home.css';

class Home extends Component {
  render(){
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
                        <li onclick="location.href='./detailedWriting.php'">
                          <ul>
                            <li>김나현</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>-</li>
                            <li>-</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>9:00<br/>20:00</li>
                            <li>-</li>
                            <li>-</li>
                          </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div className="pagination1">
        			<ul id="paginationBox" className="pagination">
        			</ul>
        		</div>
            <div className="divPaging">
                <div>◀</div>
                <div><b>1</b></div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>▶</div>
            </div>
        </div>
      </div>
    );
  }
}

export default Home;