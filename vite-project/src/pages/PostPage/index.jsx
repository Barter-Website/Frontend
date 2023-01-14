import React from 'react';
import * as styled from './styles';

import Header from '../../components/Header';
import contentIcon from '../../assets/content.svg';
import photoIcon from '../../assets/photo.svg';
import categoryIcon from '../../assets/category.svg';
import fruitsIcon from '../../assets/fruitsIcon.svg';

import Category from '../../components/Category';

const PostPage = () => {
    const FormList = (props) => {
        return (
            <styled.formListContainer>
                <styled.formList className={props.selected?'selected':''}>
                    <styled.iconBox className={props.selected?'selected':''}>
                        <img src={props.icon}/>
                    </styled.iconBox>
                    <styled.textBox>
                        <text className='formTitle'>{props.formTitle}</text>
                        <text className='formTitleE'>{props.formTitleE}</text>
                    </styled.textBox>
                </styled.formList>
            </styled.formListContainer>
        )
    }

    const CategoryList = (props) => {
        return (
            <styled.categoryList>
                <img src={fruitsIcon}/>
                <text>Fruits & Veges</text>
            </styled.categoryList>

        )
    }

    return (
        <styled.container>
            <Header/>
            <Category />
            <styled.body>
                <styled.formLists>
                    <styled.title>상품 등록</styled.title>
                    <FormList icon={contentIcon} formTitle={'상품명 & 내용'} formTitleE={'product name & content'} selected={true}/>
                    <FormList icon={photoIcon} formTitle={'사진'} formTitleE={'photos'} selected={false}/>
                    <FormList icon={categoryIcon} formTitle={'카테고리'} formTitleE={'category'} selected={false}/>
                </styled.formLists>

                <styled.postForms>
                    <styled.title>상품명 & 내용</styled.title>
                    <styled.postForm>
                        <text className='title'>상품명</text>
                        <text className='titleE'>product name</text>
                        <input></input>
                        <text className='title'>내용</text>
                        <text className='titleE'>content</text>
                        <input className='contentInput'></input>
                    </styled.postForm>

                    <styled.title>사진</styled.title>
                    <styled.postForm>
                        <styled.imgInput>이미지를 추가하세요</styled.imgInput>
                    </styled.postForm>
                    
                    <styled.title>카테고리</styled.title>
                    <styled.postForm>
                        <text className='title'>상품 카테고리</text>
                        <styled.categoryContainer>
                            <CategoryList/>
                            <CategoryList/>
                            <CategoryList/>
                            <CategoryList/>
                        </styled.categoryContainer>
                        <styled.categoryContainer>
                            <CategoryList/>
                            <CategoryList/>
                            <CategoryList/>
                            <CategoryList/>
                        </styled.categoryContainer>
                        <text className='title'>지역 카테고리</text>
                        <styled.categoryContainer>
                            <styled.regionCategory>서울</styled.regionCategory>
                            <styled.regionCategory className='selected'>경기도</styled.regionCategory>
                        </styled.categoryContainer>
                    </styled.postForm>
                </styled.postForms>
                
            </styled.body>
           
        </styled.container>
    );
};

export default PostPage;
