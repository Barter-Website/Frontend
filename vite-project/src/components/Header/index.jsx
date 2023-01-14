import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

const Header = () => {
    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate('/mainpage');
    }
    const navigateToMyPage = () => {
        navigate('/mainpage');
    }

    return (
        <styled.Header>
            <styled.BarterMark onClick={navigateToMainPage}>
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
                <styled.SearchInput></styled.SearchInput>
                <styled.SearchIcon />
            </styled.SearchBox>
            <styled.Mypage onClick={navigateToMyPage}/>
            <styled.Basket />
            <styled.Like />
        </styled.Header>
    )
}

export default Header;