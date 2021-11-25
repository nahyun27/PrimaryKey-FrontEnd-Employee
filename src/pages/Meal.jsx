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
                    <div><h2>8월 식단표</h2></div>
                    <div className="right h3">

                      <select class='selSearchOption option'>
                        <option value='A'>최신순</option>
                        <option value='T'>게시순</option>
                      </select>
                    </div>
                  </div>
                    <ul className="ulTable ulTable-home">

                    </ul>
                </li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Home;