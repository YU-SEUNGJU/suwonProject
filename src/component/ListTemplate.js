import React from 'react';
import '../css/ListTemplate.css';

const ListTemplate = ({test, form, navi, children}) => {
  return (
    <main className="form-template">
        <section className="test-wrapper">
            { test }
        </section>
        <section className="form-bar-wrapper">
            { form }
        </section>
        <section className="navi-bar-wrapper">
            { navi }
        </section>
        <section className="search-list-wrapper">
            { children }
          </section>
    </main>
  );
};

export default ListTemplate;