import '../styles/common.css';
import '../styles/writing.css';
import {NavLink} from 'react-router-dom';
import React, { useState} from 'react';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function NoticeWriting (props) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputText, setInputText] = useState('')

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputTitle = (e) => {
    setInputTitle(e.currentTarget.value)
  }

  // const handleInputText = (e) => {
  //   setInputText(e.currentTarget.value)
  // }

  const onSubmitHandler = () => {
    console.log('title', inputTitle);
    console.log('article', inputText);

    fetch('https://goote.dev/v1/cs/notice/create', {
      method: 'POST',
      headers : new Headers({
        'Content-Type': 'application/json',
        'Authorization' : axios.defaults.headers.common['Authorization']
      }),
      body : JSON.stringify({
        title: inputTitle,
        article: inputText
      })
    })
    .then((response) => response.json())
    .then((res) => {
      console.log(res)
      if(res.status === 200) {
        props.history.push('/Notice')             //리액트에서 페이지 이동하기 위해서는 props.history.push() 이용.
      } else{
        alert('공지사항 등록에 실패하였습니다.')
      }
    })
    // .then(response => {
    //   console.log('wdw')
    //   console.log(response)  //alp03100716@
    //     if(response.status === 200) {
    //       props.history.push('/Notice')             //리액트에서 페이지 이동하기 위해서는 props.history.push() 이용.
    //     } else{
    //         alert('공지사항 등록에 실패하였습니다.')
    //     }
    // }).catch(error => {
    //   console.log(error)
    // })
  }

  return(
    <div className="NoticeWriting">
      <div className="container">
        <h3>공지사항 작성</h3>

        <form className="writing-box" id="form_test" action="insertTest.do" method="post" encType="multipart/form-data">
          <div className="elem">
            <h4>제목</h4>
            <input type="text" placeholder="제목을 입력하세요." name="Title" className="form-control" value={inputTitle} onChange={handleInputTitle} required />
          </div>

          <div className="elem">
            <h4>작성자</h4>
            <input type="text" placeholder="작성자를 입력하세요." name="Name" className="form-control" />
          </div>

          <div className="elem">
            <h4>내용</h4>
            {/* <textarea placeholder="내용을 입력하세요." name="Content" className="content-writing" value={inputText} onChange={handleInputText} required></textarea> */}
            <CKEditor
              editor={ ClassicEditor }
              data="<p> asdf</p>"
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
              <h4>첨부파일</h4>
              <input type="file" name="uploadFile" className="reference"/>
            </div>

            <div className="buttons">
              <NavLink exact to="/Notice">
                <button id="btn_previous" type="button" className="sear-btn">이전</button>
              </NavLink>
              <button id="btn_register" type="button" className="sear-btn" onClick={onSubmitHandler}>등록</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NoticeWriting;