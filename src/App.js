import React from 'react';
import './App.css';
import SearchListTemplate from './component/SearchListTemplate';
import SearchBar from './component/SearchBar';

function App() {
  return (
    <SearchListTemplate searchBar={<SearchBar/>}>
      템플릿
    </SearchListTemplate>
  );
}

export default App;
