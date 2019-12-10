import React from 'react';
import '../css/SearchListTemplate.css';

const SearchListTemplate = ({searchBar, children}) => {
  return (
    <main className="search-list-template">
        <section className="search-bar-wrapper">
            { searchBar }
        </section>
        <section className="search-list-wrapper">
            { children }
          </section>
    </main>
  );
};

export default SearchListTemplate;