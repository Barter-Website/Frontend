import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

const Category = () => {
    const navigate = useNavigate();
    const navigateToMainPage = () => {
        navigate('/mainpage');
    }
    const navigateToChattingPage = () => {
        navigate('/chattingpage');
    }
    const navigateToMyPage = () => {
        navigate('/mypage');
    }

    return(
        <styled.Container>
            <styled.HrLine />
            <styled.CategoryList>
                <span onClick={navigateToMainPage}>HOME</span>
                <span onClick={navigateToChattingPage}>CHATS</span>
                <span>ABOUT US</span>
                <span>COMMUNITY</span>
                <span onClick={navigateToMyPage}>MY PAGE</span>
            </styled.CategoryList>
            <styled.HrLine />
        </styled.Container>
    )
}

export default Category;