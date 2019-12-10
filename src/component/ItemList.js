import React, { Component } from 'react';
import SearchResultItem from "./SearchResultItem";
import '../css/ItemList.css';

class ItemList extends Component {
    render() {

        return (
            <div>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="진달래꽃" author="김소월" company="민음사" year="2007" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="산유화" author="김소월" company="혜원출판사" year="2008" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="김소월시집" author="김소월" company="한국문학읽다" year="2009" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="진달래꽃" author="김소월" company="민음사" year="2007" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="산유화" author="김소월" company="혜원출판사" year="2008" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="김소월시집" author="김소월" company="한국문학읽다" year="2009" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="진달래꽃" author="김소월" company="민음사" year="2007" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="산유화" author="김소월" company="혜원출판사" year="2008" location="문헌정보실"/>
                <SearchResultItem img="%PUBLIC_URL%/logo192.png" title="김소월시집" author="김소월" company="한국문학읽다" year="2009" location="문헌정보실"/>
            </div>
        );
    }
}

export default ItemList;