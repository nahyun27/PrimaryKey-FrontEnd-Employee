import './App.css';
import Home from './pages/Home.jsx';
import Request from './pages/Request.jsx';
import Report from './pages/Report.jsx';
import Vacation from './pages/Vacation.jsx';
import Schedule from './pages/Schedule.jsx';
import Notice from './pages/Notice.jsx';
import NoticeWriting from './pages/NoticeWriting.jsx';
import Meal from './pages/Meal.jsx';
import Compliment from './pages/Compliment.jsx';

import DetailedReport from './pages/view/DetailedReport.jsx';
import DetailedNotice from './pages/view/DetailedNotice.jsx';

import Login from './pages/Login.jsx'
import Footer from './components/Footer.jsx';
import Navigation from './components/Navigation.jsx';
import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  const [isLogin, setIsLogin] = useState(false)

  useEffect(() => {
    if(sessionStorage.getItem('login_token') === null){
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log('isLogin? : ', isLogin)
    } else {
    // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
    // 로그인 상태 변경
      setIsLogin(true)
      console.log('isLogin? : ', isLogin)
    }
  })


  return (
    <div className="App">
        <Router>
          <Navigation isLogin={isLogin}/>
          {isLogin ?
          <Switch>
            <Route path='/Home' exact component={Home} />
            <Route path='/Report' exact component={Report} />
            <Route path='/Request' exact component={Request} />
            <Route path='/Vacation' exact component={Vacation} />
            <Route path='/Schedule' exact component={Schedule} />
            <Route path='/Compliment' exact component={Compliment} />
            <Route path='/Meal' exact component={Meal} />
            <Route path='/NoticeWriting' exact component={NoticeWriting} />
            <Route path='/Notice' exact component={Notice} />

            <Route path='/DetailedReport' exact component={DetailedReport} />
            <Route path='/DetailedNotice' exact component={DetailedNotice} />

            <Route path='/' exact component={Login} />
          </Switch>
          : 
          <Login />}
        </Router>
      <Footer />
    </div>
  );
}

export default App;
