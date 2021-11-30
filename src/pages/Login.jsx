import '../styles/common.css';
import '../styles/Login.css';
import React, { useState} from 'react';
import axios from 'axios';

function Login(props) {

  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const [inputRm, setInputRm] = useState('')

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.currentTarget.value)
  }

  const handleInputPw = (e) => {
    setInputPw(e.currentTarget.value)
  }

  const handleInputRm = (e) => {
    setInputRm(e.currentTarget.value)
  }
  const onForgotHandler = () => {
    alert('문의하세여')
  }

  const onSubmitHandler = () => {
    // event.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능 

    console.log('Email', inputId);
    console.log('Password', inputPw);

    if(inputId == ""){
      alert('id를 입력해주세요.')
      document.location.href = '/'
    } else if(inputPw == ""){
      alert('Password를 입력해주세요.')
      document.location.href = '/'
    }
    
    axios.post('http://admin.primarykey.shop:3000/auth/employee/', {
      'login_id': inputId,
      'password': inputPw
    })
    .then(response => {
      console.log(response) 
      if(response.status === 200) {
        const token = response.data.jwt;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        sessionStorage.setItem('login_token', axios.defaults.headers.common['Authorization'])
        sessionStorage.setItem('login_name', response.data.name)
        document.location.href = '/Home'
      } else {
        console.log("실패")
        alert('로그인에 실패하였습니다.')
      }
    })
    .catch(function (error) {
      console.log("실패", error);
      alert('로그인에 실패하였습니다.')
    })
  }
  
  return(
    <div className="Login">
      <form className="wrap">
        <div className="login-container">
          <h1>LOGIN</h1>
          <div className="login_id">
            <label>
              <h4>E-mail</h4>
            </label>
            <input className="input_box" type="email" placeholder="Enter email" name='id' value={inputId} onChange={handleInputId} required/>
          </div>

          <div className="login_pw">
            <label>
              <h4>Password</h4>
            </label>
            <input className="input_box" type="password" placeholder="Enter Password" name='passwd' value={inputPw} onChange={handleInputPw} required/>
          </div>

          <div className="login_etc">
            <div className="checkbox">
              <label>
                Remember me!
              </label>
              <input type="checkbox" name="remember" value={inputRm} onChange={handleInputRm} />
            </div>

            <div className="forgot_pw">
              <a onClick={onForgotHandler}>Forgot Password?</a>
            </div>
          </div>

          <div className="submit">
            <button type='button' onClick={onSubmitHandler}>로그인</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;