import { Component } from 'react';
import '../styles/Footer.css';
import '../styles/common.css';

class Footer extends Component {
  render(){
    return(
      <div className="Footer">
        <div className="contents">
          <p>PrimaryKey | 김나현 김다예 박창선 정종문 하혜민</p>
          <p>한양대학교 ERICA DATABASE 수업 과제 | 직원 근태관리 시스템</p>
          <p>© 2021 Team PrimaryKey. All rights reserved.</p>
        </div>
      </div>
    );
  }
}

export default Footer;