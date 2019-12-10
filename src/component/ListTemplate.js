import React from 'react';
import '../css/ListTemplate.css';

const ListTemplate = ({form, navi, children}) => {
  return (
    <main className="form-template">
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