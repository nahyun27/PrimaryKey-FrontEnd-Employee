import { Component } from 'react';
import '../styles/Request.css';
import '../styles/common.css';

class Request extends Component {
  render(){
    return(
      <div className="Request">
        <div id="mainWrapper">
            <ul>
                {/* 검색 폼 영역 */}
                <li id='liSearchOption'>
                    <div>
                        <select className='selSearchOption top2'>
                            <option value='A'>제목+내용</option>
                            <option value='T'>제목</option>
                            <option value='C'>내용</option>
                        </select>
                        <input className='top' placeholder="검색어를 입력하세요."/>
                        <input className='top3'type='button' value='검색'/>
                    </div>
                </li>
                {/* 게시판 목록 */}
                <li className="content">
                  <div className="tops">
                    <div><h2>요청 관리</h2></div>
                    <div className="right h3">
                      <button type="button" className='writing option' name="button" onclick="location.href='./writing.php'">
                      글쓰기</button>
                    </div>
                  </div>
                    <ul className="ulTable-request">
                      <li>
                        <ul>
                          <li>요청인</li>
                          <li>요청 종류</li>
                          <li>요청 사항</li>
                          <li>요청 사유</li>
                          <li>상태</li>
                          <li>신청일자</li>
                          <li>관리</li>
                        </ul>
                      </li>
                      {/* 게시물이 출력될 영역 */}
                      <li onclick="location.href='./detailedWriting.php'">
                        <ul>
                          <li>김나모</li>
                          <li className="left">퇴근 요청</li>
                          <li>첨부파일</li>
                          <li>김나모</li>
                          <li>대기중</li>
                          <li>2021/08/30 20:15</li>
                          <li>
                            <button type="button" name="button" onclick="">승인</button>
                            <button type="button" name="button" onclick="">거절</button>
                          </li>
                        </ul>
                      </li>
                    </ul>
                </li>
            </ul>
            <div className="pagination1">
        			<ul id="paginationBox" className="pagination">
        			</ul>
        		</div>
            <div id="divPaging">
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

export default Request;