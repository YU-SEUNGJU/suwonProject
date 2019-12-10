import React from 'react';
import '../css/SearchBar.css';

const SearchBar = ({location, text, value, onChangeLocation, onChange, onKeyPress, onRemove, onSearch}) => {
  return (
    <div className="SearchBarArea">
        <div className="change-location-button" onClick={onChangeLocation}>
          { location }
        </div>
        <input placeholder={text} value={value} onChange={onChange} onKeyPress={onKeyPress}/>
        <div className="remove-button" onClick={onRemove}>
            X
        </div>
        <div className="search-button" onClick={onSearch}>
            Search
        </div>
    </div>
  );
};

export default SearchBar;