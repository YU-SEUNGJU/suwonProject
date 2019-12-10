import React from 'react';
import '../css/SearchBar.css';

const SearchBar = ({text, value, onChangeLocation, onChange, onKeyPress, onSearch}) => {
  return (
    <div className="SearchBarArea">
        <div className="change-location-button" onClick={onChangeLocation}>
            Location
        </div>
        <input placeholder={text} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="search-button" onClick={onSearch}>
            Search
        </div>
    </div>
  );
};

export default SearchBar;