import React, { useState } from 'react';
import * as styled from './styles';

const Category = () => {
    return(
        <styled.Container>
            <styled.HrLine />
            <styled.CategoryList>
                <span>HOME</span>
                <span>CHATS</span>
                <span>ABOUT US</span>
                <span>COMMUNITY</span>
                <span>MY PAGE</span>
            </styled.CategoryList>
            <styled.HrLine />
        </styled.Container>
    )
}

export default Category;