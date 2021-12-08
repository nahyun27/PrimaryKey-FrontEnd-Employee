import '../styles/common.css';
import '../styles/writing.css';
import {NavLink} from 'react-router-dom';
import React, { useState} from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NoticeModify (props) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputText, setInputText] = useState('')

  const handleInputTitle = (e) => {
    setInputTitle(e.currentTarget.value)
  }

  const onSubmitHandler = () => {
    fetch('http://admin.primarykey.shop:3000/service/notice', {
      method: 'POST',
      headers : new Headers({
        'Content-Type': 'application/json',
        'Authorization' : sessionStorage.getItem("login_token")
      }),
      body : JSON.stringify({
        notice_title: inputTitle,
        notice_content: inputText,
        notice_writer: "김나현"
      })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log("성공!", res)
      props.history.push('/Notice')  
      alert('공지사항이 등록되었습니다.')
    })
  }
  
  return(
    <div className="NoticeWriting">
      <div className="container">
        <h2>공지사항 수정</h2>

        <form className="writing-box" id="form_test" action="insertTest.do" method="post" encType="multipart/form-data">
          <div className="elem">
            <h3>제목</h3>
            <input type="text" placeholder="제목을 입력하세요." name="Title" className="form-control" defaultValue={props.location.aboutProps.post.notice_title} onChange={handleInputTitle} required />
          </div>

          <div className="elem">
            <h3>작성자</h3>
            <input type="text" placeholder="작성자를 입력하세요." name="Name" className="form-control" />
          </div>
          
          <div className="elem">
            <h3>내용</h3>
            <CKEditor
              editor={ ClassicEditor }
              data={props.location.aboutProps.post.notice_content}
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor );
              } }
              onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  setInputText(data)
                  console.log( { event, editor, data } );
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor );
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor );
              } }
            />
          </div>

          <div className="bottom">
            <div>
              <h3>첨부파일</h3>
              <input type="file" name="uploadFile" className="reference"/>
            </div>

            <div className="buttons">
              <NavLink to={{
                pathname:"/DetailedNotice",
                aboutProps:{
                  post : props.location.aboutProps.post
                }
              }} exact>
                <button id="btn_previous" type="button" className="sear-btn">취소</button>
              </NavLink>
              <button id="btn_register" type="button" className="sear-btn" onClick={onSubmitHandler}>등록</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoticeModify;