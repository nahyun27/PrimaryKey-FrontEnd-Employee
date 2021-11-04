import logo from '../assets/logo.png';
import '../styles/Navigation.css';
import '../styles/common.css';
import {BrowserRouter, NavLink} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function Navigation() {

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
          
          <BrowserRouter>
            <ul className="navbar__menu">
                <li><NavLink to="/">출퇴근 관리</NavLink></li>
                <li><NavLink to="/Request">요청 관리</NavLink></li>
                <li><NavLink to="/Vacation">휴가 관리</NavLink></li>
                <li><NavLink to="/Schedule">직원 스케줄 관리</NavLink></li>
                <li><NavLink to="/Notice">건의사항 관리</NavLink></li>
            </ul>
          </BrowserRouter>

          <input type="checkbox" id="menuicon"/>
          <label htmlFor="menuicon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <div className="sidebar">
            <BrowserRouter>
              <ul className="sidebar__menu">
                <li><NavLink to="/">출퇴근 관리</NavLink></li>
                <li><NavLink to="/Request">요청 관리</NavLink></li>
                <li><NavLink to="/Vacation">휴가 관리</NavLink></li>
                <li><NavLink to="/Schedule">직원 스케줄 관리</NavLink></li>
                <li><NavLink to="/Notice">건의사항 관리</NavLink></li>
              </ul>
            </BrowserRouter>
          </div>
        </nav>
      </div>
    );
}

export default Navigation;