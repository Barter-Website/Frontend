import React, { useState } from 'react';
import * as styled from './styles';

const Header = () => {
    return (
        <styled.Header>
            <styled.BarterMark>
                <styled.BarterIcon />
                <styled.BarterName>
                    <span>BARTER</span>
                    <span>TRADING GOODS</span>
                </styled.BarterName>
            </styled.BarterMark>
            <styled.SearchBox>
                <span>All Categories</span>
                <styled.UnderArrow />
                <div id='VerticalLine' />
                <styled.SearchIcon />
            </styled.SearchBox>
            <styled.Mypage />
            <styled.Basket />
            <styled.Like />
        </styled.Header>
    )
}

export default Header;