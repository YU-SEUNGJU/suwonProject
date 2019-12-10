import React from 'react';
import './App.css';
import ListTemplate from './component/ListTemplate';
import SearchBar from './component/SearchBar';
import ItemList from './component/ItemList';
import Navi from './component/Navi';

function App() {
  return (
    <ListTemplate form={<SearchBar location="북수원" text="김소월에 관한 검색결과 입니다."/>} navi={<Navi firstCnt="100" secCnt="20" thrCnt="70" fourCnt="10"/>}>
      <ItemList/>
    </ListTemplate>
  );
}

export default App;
