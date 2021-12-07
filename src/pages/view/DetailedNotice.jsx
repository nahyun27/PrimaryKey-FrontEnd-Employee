import '../../styles/common.css';
import '../../styles/writing.css';
import '../../styles/Detailed.css';
import getDateStringGMT9 from '../../modules/DateParser';
import {NavLink} from 'react-router-dom';

const DeteiledNotice = (props) => {
  const data = props.location.aboutProps.post
  return(
    <div className="DeteiledNotice">
      <div className="container">
        <div className="tops-detailed">
          <h2>공지사항 조회</h2>
          <div className="buttons">
            <NavLink exact to="/Notice">
              <button type="button" className="btn">이전</button>
            </NavLink>
            <NavLink to={{
              pathname:"/NoticeModify",
              aboutProps:{
                post : data
              }
            }}exact>
              <button type="button" className="btn">수정</button>
            </NavLink>
          </div>
        </div>
        
        <div className="writing-box">
          <div className="main-info">
            <div className="title-info">
              <h3>제목</h3>
              <hr/>
              <div className="title-content" dangerouslySetInnerHTML={ {__html: data.title}}></div>
              <div className="info-table">
                <li className="col">작성자</li>
                <li className="name-info"><p>{data.admin.name}</p></li>
                <li className="col">작성일</li>
                <li><p>{getDateStringGMT9(new Date(data.created_at))}</p></li>
                <li className="col">수정일</li>
                <li className="end"><p>{getDateStringGMT9(new Date(data.updatedAt))}</p></li>
              </div>
            </div>
            <div className="article-info">
              <h3>내용</h3>
              <hr/>
              <div className="article-content" dangerouslySetInnerHTML={ {__html: data.article}}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeteiledNotice;
