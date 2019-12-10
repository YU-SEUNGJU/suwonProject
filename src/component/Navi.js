import React from 'react';
import '../css/Navi.css';

const Navi = ({firstCnt, secCnt, thrCnt, fourCnt}) => {
  return (
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
              <li class="active"><a href="#">전체 {firstCnt}</a></li>
              <li><a href="#">도서명 {secCnt}</a></li>
              <li><a href="#">저자 {thrCnt}</a></li>
              <li><a href="#">출판사 {fourCnt}</a></li>
          </ul>
        </div>
    </nav>
  );
};

export default Navi;