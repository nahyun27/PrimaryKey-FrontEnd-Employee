import '../../styles/common.css';
import '../../styles/writing.css';
import '../../styles/Detailed.css';
import getDateStringGMT9 from '../../modules/DateParser';
import {NavLink} from 'react-router-dom';

const DeteiledReport = (props) => {
  console.log(props.location)
  const data = props.location.aboutProps.post
  console.log(data)
  return(
    <div className="DeteiledReport">
      <div className="container">
        <div className="tops-detailed">
          <h2>건의사항 조회</h2>
          <div className="buttons">
            <NavLink exact to="/Report">
              <button type="button" className="btn">이전</button>
            </NavLink>
          </div>
        </div>
        
        <div className="writing-box">
          <div className="main-info">
            <div className="title-info">
              npm<div className="info-table">
                <li className="col">작성자</li>
                <li className="name-info"><p>{data.employee_id}</p></li>
                <li className="col">작성일</li>
                <li><p>{getDateStringGMT9(new Date(data.created_at))}</p></li>
                <li className="col">수정일</li>
                <li className="end"><p>{getDateStringGMT9(new Date(data.updated_at))}</p></li>
              </div>
              <h3>제목</h3>
              <hr/>
              <div className="title-content" dangerouslySetInnerHTML={ {__html: data.title}}></div>
              
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

export default DeteiledReport;
