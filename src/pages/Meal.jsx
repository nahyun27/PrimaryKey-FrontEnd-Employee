import '../styles/common.css';
import '../styles/board.css';
import '../styles/Meal.css';
import React, {useState, useEffect} from 'react';
import MealList from '../components/MealList.jsx'
import Paging from '../modules/Paging.jsx';
import axios from 'axios';
import next1 from '../assets/next.png';
import back from '../assets/back.png';
import meal1 from '../assets/meal1.jpeg';
import meal2 from '../assets/meal2.jpeg';
import meal3 from '../assets/meal3.jpeg';
import meal4 from '../assets/meal4.jpeg';
import meal5 from '../assets/meal5.jpeg';
import meal6 from '../assets/meal6.jpeg';


function Meal(){
  const [next, setNext] = useState(false);
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
  
  const onNextHandler = () => {
    setNext(true)
  }
  const onPrevHandler = () => {
    setNext(false)
  }
  

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
              <p className="date-menu">{!(next)? "2021년 12월 6일 (월)": "2021년 12월 6일 (화)"}</p>
                <img src={back} onClick={onPrevHandler} alt="logo" />
                <img src={next1} onClick={onNextHandler} alt="logo" />
              </div>
            </div>
            {!(next)? 
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
            :
            
            <div className="meal-contents">
              <div className="meal-infos">
                <div className="meal-info">
                  <h3 className="menu-title">조식</h3>
                  <img src={meal5} className="meal-img" alt="logo" />
                  <p>간장불고기</p>
                  <p>오뎅국</p>
                  <p>잡곡밥</p>
                  <p>배추김치</p>
                  <p>시금치 무침</p>
                  <p>진라면</p>
                </div>
                <div className="meal-info">
                  <h3 className="menu-title">중식</h3>
                  <img src={meal4} className="meal-img" alt="logo" />
                  <p>하이라이스 </p>
                  <p>볶음면</p>
                  <p>오이김치</p>
                  <p>시금치 된장국</p>
                  <p>콘샐러드</p>
                  <p>잡곡밥</p>
                </div>
                <div className="meal-info">
                  <h3 className="menu-title">석식</h3>
                  <img src={meal6} className="meal-img" alt="logo" />
                  <p>돈까스</p>
                  <p>흰쌀밥</p>
                  <p>게맛살 마요샐러드</p>
                  <p>깍두기</p>
                  <p>시금치</p>
                  <p>우동</p>
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
                        <li>시설 관리부</li>
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
                        <li>하혜민</li>
                        <li>총무부</li>
                      </ul>
                    </li>
                    <li>
                      <ul className="ulTable-inside ulTable-meal"> 
                        <li>2</li>
                        <li>김나현</li>
                        <li>경영지원부</li>
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
                        <li>김다예</li>
                        <li>경영지원부</li>
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
                        <li>경영지원부</li>
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
            
            }
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Meal;
