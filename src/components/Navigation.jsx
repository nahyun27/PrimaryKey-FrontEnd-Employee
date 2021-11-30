import logo from '../assets/logo.png';
import '../styles/Navigation.css';
import {NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Navigation(props) {
  const onLogout = () => {
    // sessionStorage 에 user_id 로 저장되어있는 아이템을 삭제한다.
      sessionStorage.removeItem('login_token')
      // App 으로 이동(새로고침)
      document.location.href = '/'
  }

  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
      setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  }
  useEffect(()=>{
      window.addEventListener('scroll', updateScroll);
  });
    return(
      <div className="Navigation">
        <nav className={scrollPosition < 100 ? "navbar" : "change-navbar"}>
          <div className="navbar__logo">
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <ul className="navbar__menu">
            <li><NavLink exact to="/Home">출퇴근 관리</NavLink></li>
            <li><NavLink exact to="/Request">요청 관리</NavLink></li>
            <li><NavLink exact to="/Vacation">휴가 관리</NavLink></li>
            <li><NavLink exact to="/Schedule">직원 스케줄 관리</NavLink></li>
            <li><NavLink exact to="/Meal">배식 신청</NavLink></li>
            <li><NavLink exact to="/Compliment">우수 직원</NavLink></li>
            <li><NavLink exact to="/Notice">공지사항</NavLink></li>
          </ul>
          <div className="navbar__menu">
            <button type='button' className="logout_btn" onClick={onLogout}> {props.isLogin ? "로그아웃" : "로그인"} </button>
            <p className="separator">|</p>
            {sessionStorage.getItem('login_name')}
          </div>
          <input type="checkbox" id="menuicon"/>
          <label htmlFor="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="sidebar">
            <ul className="sidebar__menu">
              <li><NavLink exact to="/Home">출퇴근 관리</NavLink></li>
              <li><NavLink to="/Request">요청 관리</NavLink></li>
              <li><NavLink to="/Vacation">휴가 관리</NavLink></li>
              <li><NavLink to="/Schedule">직원 스케줄 관리</NavLink></li>
              <li><NavLink exact to="/Meal">배식 신청</NavLink></li>
              <li><NavLink exact to="/Compliment">우수 직원</NavLink></li>
              <li><NavLink exact to="/Notice">공지사항</NavLink></li>
            </ul>
          </div>
        </nav>
      </div>
    );
}

export default Navigation;