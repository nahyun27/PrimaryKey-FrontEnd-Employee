import { Component } from 'react';
import '../styles/common.css';
import '../styles/Notice.css';


class Vacation extends Component {
  render(){
    return(
      <div className="Vacation">
        <h2 class="dash"> !</h2>
        <div id="mainWrapper">
            <ul>
                {/* 검색 폼 영역 */}
                <li id='liSearchOption'>
                    <div>
                        <select class='selSearchOption top2'>
                            <option value='A'>제목+내용</option>
                            <option value='T'>제목</option>
                            <option value='C'>내용</option>
                        </select>
                        <input class='top' placeholder="검색어를 입력하세요."/>
                        <input class='top3'type='button' value='검색'/>
                    </div>
                </li>
                {/* 게시판 목록 */}
                <li class="content">
                  <div class="tops">
                    <div class="left h3">공지사항</div>
                    <div class="right h3">
                      <button type="button" class='writing option' name="button" onclick="location.href='./writing.php'">
                      글쓰기</button>
                    </div>
                  </div>
                    <ul id ="ulTable">
                        <li>
                            <ul>
                                <li>No</li>
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
                                <li class="left">제목제목제목제목1</li>
                                <li>2014.07.09</li>
                                <li>김나모</li>
                                <li>5</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
            <div class="pagination1">
        			<ul id="paginationBox" class="pagination">
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

export default Vacation;