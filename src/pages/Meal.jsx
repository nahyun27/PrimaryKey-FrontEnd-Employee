import '../styles/common.css';
import '../styles/board.css';
import '../styles/Meal.css';
import React, {useState, useEffect} from 'react';
import MealList from '../components/MealList.jsx'
import Paging from '../modules/Paging.jsx';
import axios from 'axios';
import next from '../assets/next.png';
import back from '../assets/back.png';
import meal1 from '../assets/meal1.jpeg';
import meal2 from '../assets/meal2.jpeg';
import meal3 from '../assets/meal3.jpeg';


function Meal(){
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(12);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('http://admin.primarykey.shop:3000/menu/list', { 
        headers: { Authorization: sessionStorage.getItem("login_token")}
      })
      console.log(res)

      var data_ = res.data.menus
      setPosts(data_);
    }
    fetchPosts();
  }, []);

  //현재 페이지 가져오기
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  //클릭 이벤트-페이지 바꾸기
  const paginate = pageNum => setCurrentPage(pageNum);


  return(
    <div className="Meal">
      <div className="mainWrapper">
        <ul>
          {/* 게시판 목록 */}
          <br/>
          <br/>
          <li className="content">
            <div className="tops">
              <h2>식단표</h2>
              <div className="next-back">
                <p>2021년 12월 6일 (월)</p>
                <img src={back} alt="logo" />
                <img src={next} alt="logo" />
              </div>
            </div>
            <div className="meal-contents">
              <div className="meal-infos">
                <div className="meal-info">
                  <h3 className="menu-title">조식</h3>
                  <img src={meal1} className="meal-img" alt="logo" />
                  <p>짜장 덮밥</p>
                  <p>과일 마요 샐러드</p>
                  <p>계란 파국</p>
                  <p>배추김치</p>
                  <p>매콤 닭강정</p>
                  <p>당면 잡채</p>
                </div>
                <div className="meal-info">
                  <h3 className="menu-title">중식</h3>
                  <img src={meal2} className="meal-img" alt="logo" />
                  <p>미트볼 스파게티 </p>
                  <p>함박스테이크</p>
                  <p>유부장국</p>
                  <p>배추김치</p>
                  <p>양베추 샐러드</p>
                  <p>잡곡밥</p>
                </div>
                <div className="meal-info">
                  <h3 className="menu-title">석식</h3>
                  <img src={meal3} className="meal-img" alt="logo" />
                  <p>오므라이스</p>
                  <p>옥수수 스프</p>
                  <p>떡갈비</p>
                  <p>샐러드</p>
                  <p>모닝빵 & 딸기잼</p>
                  <p>단무지</p>
                </div>
              </div>
              <div className="meal-applys">
                <div className="meal-apply">
                  <div className="middle">
                    <h3>신청자 명단</h3>
                    <h4>총 신청자 수 : 15명</h4>
                  </div>
                  <ul className="ulTable">
                    <li>
                      <ul className="ulTable-inside ulTable-meal">
                        <li>NO</li>
                        <li>직원명</li>
                        <li>부서명</li>
                      </ul>
                    </li>
                    {/* <MealList posts={currentPosts}/> */}
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>1</li>
                        <li>김다예</li>
                        <li>경영지원부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>2</li>
                        <li>김나현</li>
                        <li>총무부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>3</li>
                        <li>박창선</li>
                        <li>경영부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>4</li>
                        <li>하혜민</li>
                        <li>총무부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>5</li>
                        <li>정종문</li>
                        <li>관리부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>6</li>
                        <li>홍길동</li>
                        <li>관리부</li>
                      </ul>
                    </li> 
                  </ul>
                  <div className="more">
                    <p>더보기</p>
                  </div>
                </div>
                <div className="meal-apply">
                  <div className="middle">
                    <h3>신청자 명단</h3>
                    <h4>총 신청자 수 : 20명</h4>
                  </div>
                  <ul className="ulTable">
                    <li>
                      <ul className="ulTable-inside ulTable-meal">
                        <li>NO</li>
                        <li>직원명</li>
                        <li>부서명</li>
                      </ul>
                    </li>
                    {/* <MealList posts={currentPosts}/> */}
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>1</li>
                        <li>김다예</li>
                        <li>경영지원부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>2</li>
                        <li>김나현</li>
                        <li>총무부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>3</li>
                        <li>박창선</li>
                        <li>경영부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>4</li>
                        <li>하혜민</li>
                        <li>총무부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>5</li>
                        <li>정종문</li>
                        <li>관리부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>6</li>
                        <li>홍길동</li>
                        <li>관리부</li>
                      </ul>
                    </li> 
                  </ul>
                  <div className="more">
                    <p>더보기</p>
                  </div>
                </div>
                <div className="meal-apply">
                  <div className="middle">
                    <h3>신청자 명단</h3>
                    <h4>총 신청자 수 : 33명</h4>
                  </div>
                  <ul className="ulTable">
                    <li>
                      <ul className="ulTable-inside ulTable-meal">
                        <li>NO</li>
                        <li>직원명</li>
                        <li>부서명</li>
                      </ul>
                    </li>
                    {/* <MealList posts={currentPosts}/> */}
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>1</li>
                        <li>김다예</li>
                        <li>경영지원부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>2</li>
                        <li>김나현</li>
                        <li>총무부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>3</li>
                        <li>박창선</li>
                        <li>경영부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>4</li>
                        <li>하혜민</li>
                        <li>총무부</li>
                      </ul>
                    </li> 
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>5</li>
                        <li>정종문</li>
                        <li>관리부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>6</li>
                        <li>홍길동</li>
                        <li>관리부</li>
                      </ul>
                    </li> 
                  </ul>
                  <div className="more">
                    <p>더보기</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Meal;
