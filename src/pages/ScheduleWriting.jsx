import '../styles/common.css';
import '../styles/writing.css';
import {NavLink} from 'react-router-dom';
import React, { useState} from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function ScheduleWriting (props) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputText, setInputText] = useState('')

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputTitle = (e) => {
    setInputTitle(e.currentTarget.value)
  }

  const onSubmitHandler = () => {
    alert('스케줄이 등록되었습니다.')
  }
  
  return(
    <div className="ScheduleWriting">
      <div className="container">
        <h2>스케줄 등록</h2>

        <form className="writing-box" id="form_test" action="insertTest.do" method="post" encType="multipart/form-data">
          <div className="elem">
            <h3>스케줄명</h3>
            <input type="text" placeholder="스케줄명을 입력하세요." name="Title" className="form-control" value={inputTitle} onChange={handleInputTitle} required />
          </div>

          <div className="elem">
            <h3>직원명</h3>
            <input type="text" placeholder="해당되는 직원를 입력하세요." name="Name" className="form-control" />
          </div>

          <div className="elem">
            <h3>스케줄 일시</h3>
            <div className="top44">
              <input className='date-search' type="datetime-local"/>
              <p className='pp'>~</p>
              <input className='date-search' type="datetime-local"/>
            </div>
          </div>
          <div className="elem">
            <h3>스케줄 상세 내용</h3>
            <textarea type="text" placeholder="스케줄 상세 내용을 입력하세요." name="Name" className="form-control2" />
          </div>

          <div className="bottom">
            <div>
              <h3>색상 선택</h3>
              <select className='selSearchOption option'>
                <option className="green" value='G'>초록</option>
                <option className="blue" value='B'>파랑</option>
                <option className="red" value='R'>빨강</option>
                <option className="purple" value='P'>보라</option>
              </select>
            </div>

            <div className="buttons">
              <NavLink exact to="/Schedule">
                <button id="btn_previous" type="button" className="sear-btn">이전</button>
              </NavLink>
              <NavLink to={{
                pathname:"/Schedule",
                aboutProps:{
                  post : "add"
                }
              }} exact>
              <button id="btn_register" type="button" className="sear-btn" onClick={onSubmitHandler}>등록</button>
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ScheduleWriting;