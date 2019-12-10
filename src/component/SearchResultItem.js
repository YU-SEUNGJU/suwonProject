import React, { Component } from 'react';
import '../css/SearchResultItem.css';


class SearchResultItem extends Component {
    render() {
        const { img, title, author, company, year, location } = this.props;

        return (
            <div className="search-item">
                <div className={`search-text`}>
                    <div className="imgArea">

                    </div>
                    <div className="infoArea">
                        <div>{title}</div>
                        <div>{author} 엮음</div>
                        <div>{company} | {year}</div>
                        <div>자료실 | {location}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResultItem;